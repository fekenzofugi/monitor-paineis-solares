import { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiSearch } from "react-icons/fi"; // React Icons

const ChatNav = () => {
    const [collapsed, setCollapsed] = useState(false);

    const chats = [
        { title: "Conversation 1", date: "May 23" },
        { title: "Project Ideas", date: "May 20" },
        { title: "Travel Plan", date: "May 15" },
    ];

    return (
        <Sidebar collapsed={collapsed}>
            <TopBar>
                <IconButton onClick={() => setCollapsed(!collapsed)} title="Toggle Sidebar">
                    <FiMenu size={20} />
                </IconButton>
                {!collapsed && (
                    <IconButton title="Search">
                        <FiSearch size={20} />
                    </IconButton>
                )}
            </TopBar>

            {!collapsed && (
                <TopSection>
                    <NewChatButton>+ New Chat</NewChatButton>
                    <ChatList>
                        {chats.map((chat, idx) => (
                            <ChatItem key={idx}>
                                <ChatTitle>{chat.title}</ChatTitle>
                                <ChatDate>{chat.date}</ChatDate>
                            </ChatItem>
                        ))}
                    </ChatList>
                </TopSection>
            )}
        </Sidebar>
    );
};

export default ChatNav;

const Sidebar = styled.div<{ collapsed: boolean }>`
    display: flex;
    flex-direction: column;
    width: ${({ collapsed }) => (collapsed ? "60px" : "260px")};
    height: 100vh;
    background-color: var(--background-color, #202123);
    border-right: 1px solid var(--font-color, #2d2f31);
    transition: width 0.3s ease;
    overflow: hidden;
    color: white;
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
`;

const IconButton = styled.button`
    background: none;
    border: none;
    color: var(--text-color, #e8eaed);
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    transition: 0.2s;
    &:hover {
        opacity: 0.8;
    }
`;

const TopSection = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 0 1rem;
`;

const NewChatButton = styled.button`
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 6px;
    background-color: var(--background-secondary-color, #343541);
    color: var(--text-color, #e8eaed);
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const ChatList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const ChatItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.75rem;
    border-radius: 6px;
    background-color: var(--background-color, #2a2b32);
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        opacity: 0.8; 
    }
`;

const ChatTitle = styled.div`
    font-size: 0.95rem;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ChatDate = styled.div`
    font-size: 0.75rem;
    color: #b0b0b0;
    margin-top: 0.2rem;
`;
