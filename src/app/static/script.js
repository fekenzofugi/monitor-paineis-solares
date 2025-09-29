document.addEventListener("DOMContentLoaded", function () {
    const chatForm = document.getElementById("chat-gen");
    const userInput = document.querySelector("input[name='user_input']");
    const responseBox = document.querySelector(".chat-answer");

    chatForm.onsubmit = async function (event) {
        event.preventDefault();

        // Replace previous message instead of appending
        const userMessage = `<p><strong>You:</strong> ${userInput.value}</p>`;
        const doormanMessage = `<p><strong>Doorman:</strong> <span id="response-text"></span></p>`;
        responseBox.innerHTML = userMessage + doormanMessage; // Replace content
        const responseText = document.getElementById("response-text");

        const formData = new FormData(chatForm);

        try {
            const response = await fetch("/llm", {
                method: "POST",
                body: formData
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                responseText.innerHTML += decoder.decode(value, { stream: true });  // Append streamed text
            }

            // Clear input
            userInput.value = '';

        } catch (error) {
            responseText.innerHTML = `<span style="color:red;">Error: ${error.message}</span>`;
        }
    };
});

document.addEventListener("DOMContentLoaded", function(){
    const chatForm=document.getElementById("chat-gen");
    const userInput=document.querySelector("input[name='user_input']");
    const responseBox=document.querySelector(".chat-answer");
    const autoButtons=document.querySelectorAll(".auto-btn, .clean-btn");
    const technicalBtn=document.getElementById("technical-btn");
    const technicalData=document.getElementById("technical-data");

    async function sendMessage(message){
        responseBox.innerHTML=`<p><strong>You:</strong> ${message}</p><p><strong>SolarChat:</strong> <span id="response-text"></span></p>`;
        const responseText=document.getElementById("response-text");
        const formData=new FormData();
        formData.append("user_input", message);

        try{
            const response=await fetch("/llm",{method:"POST",body:formData});
            const reader=response.body.getReader();
            const decoder=new TextDecoder();
            while(true){
                const {value,done}=await reader.read();
                if(done) break;
                responseText.innerHTML+=decoder.decode(value,{stream:true});
            }
            userInput.value='';
        }catch(error){
            responseText.innerHTML=`<span style="color:red;">Error: ${error.message}</span>`;
        }
    }

    chatForm.onsubmit=function(event){event.preventDefault(); sendMessage(userInput.value);}
    autoButtons.forEach(btn=>btn.addEventListener("click",()=>sendMessage(btn.dataset.msg)));

    // Toggle technical data
    technicalBtn.addEventListener("click",()=>{ 
        technicalData.style.display = technicalData.style.display==='none'?'flex':'none';
    });

    // Função para criar sinais animados
    function createSinePlot(id,title,amplitude,frequency,color){
        const t=Array.from({length:200},(_,i)=>i/20);
        const y=t.map(x=>amplitude*Math.sin(2*Math.PI*frequency*x));
        Plotly.newPlot(id,[{x:t,y:y,mode:'lines',line:{color}}],{title,xaxis:{title:'Time (s)'},yaxis:{title:'Amplitude'}});
        let i=0;
        setInterval(()=>{
            const newY=t.map(x=>amplitude*Math.sin(2*Math.PI*frequency*(x+i/20)));
            Plotly.update(id,{y:[newY]},{},[0]);
            i++;
        },100);
    }

    // Criar sinais de entrada e saída
    createSinePlot('voltage-input-plot','Voltage Input (V)',5,1,'red');
    createSinePlot('current-input-plot','Current Input (A)',2,1,'blue');
    createSinePlot('voltage-output-plot','Voltage Output (V)',5,1,'orange');
    createSinePlot('current-output-plot','Current Output (A)',2,1,'green');
    createSinePlot('output-signal-plot','Output Signal (V)',4,0.5,'purple');

    // Dados de energia (exemplo)
    const instantPower=3.5;
    const monthlyPower=120.7;
    const kWhValue=1.2; // R$/kWh
    document.getElementById('instant-power').innerText=`${instantPower.toFixed(2)} kWh`;
    document.getElementById('monthly-power').innerText=`${monthlyPower.toFixed(2)} kWh`;
    document.getElementById('money-saved').innerText=`R$ ${(monthlyPower*kWhValue).toFixed(2)}`;

    Plotly.newPlot('monthly-history-plot',[{x:['Jan','Feb','Mar','Apr','May'],y:[100,120,90,110,130],type:'bar'}],{title:'Produção Mensal (kWh)'});
    Plotly.newPlot('community-consumption-plot',[{x:['Placa1','Placa2','Placa3'],y:[50,70,65],type:'bar'}],{title:'Consumo da Comunidade (kWh)'});
    Plotly.newPlot('excess-plot',[{x:['Semana1','Semana2','Semana3','Semana4'],y:[5,8,12,10],type:'bar'}],{title:'Excedente Acumulado (kWh)'});

    // Sistema de votação
    const voteBtns=document.querySelectorAll(".vote-btn");
    const voteResult=document.getElementById("vote-result");
    voteBtns.forEach(btn=>btn.addEventListener("click",()=>{ voteResult.innerText=`Escolha: ${btn.dataset.choice}`; }));
});