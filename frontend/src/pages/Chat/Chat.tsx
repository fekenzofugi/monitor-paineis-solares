import styled from "styled-components";
import ChatForm from "../../components/Chat/ChatForm";
import ChatNav from "../../components/Chat/ChatNav";

const Chat = () => {
    return (
        <Wrapper>
            <ChatNav />
            <ChatForm />
        </Wrapper>
    );
};

export default Chat;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-secondary-color);
`;