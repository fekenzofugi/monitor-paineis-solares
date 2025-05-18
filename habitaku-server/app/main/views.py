from flask import (
    Blueprint, render_template, request, session, Response, stream_with_context, redirect, url_for, flash)
from ..schemas import User, Chat
from app import db
from ..auth.views import login_required
import requests
import sys
import json
sys.path.append('../')

main_bp = Blueprint('main', __name__)

# @main_bp.route('/llm/<id:chat_id>', methods=('GET', 'POST'))
# @login_required
# def get_chat(chat_id):
#     chat = Chat.query.filter_by(id=chat_id)

#     render_template('main/index.html', chats=chat, res=chat.text, user_input=chat.user_input)


@main_bp.route('/llm', methods=('GET', 'POST'))
@login_required
def index():
    newest_chat = Chat.query.filter_by(author_id=session['user_id']).order_by(Chat.id.desc()).first()

    if newest_chat:
        user_input = newest_chat.user_input
        res = newest_chat.text
    else:
        user_input = None
        res = None

    if request.method == "POST":
        user_input = request.form['user_input']
        print(f"User input: {user_input}")
        messages = []

        if newest_chat:
            for chat in User.query.get(session['user_id']).chats.all():
                messages.append({"role": "user", "content": chat.user_input})
                messages.append({"role": "assistant", "content": chat.text})

        messages.append({"role": "user", "content": user_input})

        def generate_text():
            try:
                response = requests.post(
                    'http://ollama:11434/api/chat',
                    json={"messages": messages, "stream": True, "model": "myllama3"},
                    stream=True
                )

                collected_text = ""
                for chunk in response.iter_lines():
                    if chunk:
                        chunk_data = chunk.decode('utf-8')
                        chunk_data = json.loads(chunk_data)["message"]["content"]
                        yield chunk_data
                        collected_text += chunk_data

                # Gerar título como string, não set
                num_chats = User.query.get(session['user_id']).chats.count()
                chat_title = f"Chat {num_chats}"

                # Salvar no banco de dados
                chat = Chat(
                    author_id=session['user_id'],
                    title=chat_title,
                    text=collected_text,
                    user_input=user_input
                )
                db.session.add(chat)
                db.session.commit()

            except Exception as e:
                yield f"Error: {str(e)}"

        return Response(stream_with_context(generate_text()), content_type='text/plain')
    
    chats = Chat.query.filter_by(author_id=session['user_id']).all()
    return render_template('main/index.html', chats=chats, res=res, user_input=user_input)
