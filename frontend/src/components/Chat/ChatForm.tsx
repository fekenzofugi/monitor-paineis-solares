import styled from "styled-components"
import { FaArrowUp } from "react-icons/fa"

const ChatForm = () => {
    return (
        <Wrapper>
            <Form>
                <TextArea name="chat-input" id="chat-input" placeholder="Type your message..." />
                <Button type="submit">
                    <FaArrowUp />
                </Button>
            </Form>
        </Wrapper>
    );
}

export default ChatForm;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`;

const Form = styled.form`
    display: flex;
    gap: 8px;
    background-color: var(--background-secondary-color);
    align-items: center;
    border-radius: 1.5rem
    border: 1px solid var(--white);
    width: 100%;
    justify-content: center;
    border: 1px solid var(--background-color);
`;

const TextArea = styled.textarea`
    resize: none;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 1.5rem;
    background-color: var(--background-secondary-color);
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    transition: border-color 0.2s ease;
    color: var(--text-color);
    max-width: 1200px;
    &:focus {
        outline: none;
        border-color: var(--text-color);
    }
`;

const Button = styled.button`
    background-color: var(--text-color); 
    border: none;
    color: var(--background-color);
    padding: 0.5rem;
    border-radius: 100%;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.7rem;
    transition: 0.2s ease;
    &:hover:not(:disabled) {
        opacity: 0.8;
    }

    &:disabled {
        background-color: #a7d9ce;
        cursor: default;
    }
`;
