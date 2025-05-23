import styled from "styled-components"

const ChatForm = () => {
    return (
        <Wrapper>
            <form>
                <input type="text" placeholder="Type a message..." />
                <button type="submit">Send</button>
            </form>
        </Wrapper>
    );
}

export default ChatForm;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: var(--background-secondary-color);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
`;