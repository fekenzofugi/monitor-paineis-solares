import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <p>© 2025 Habitaku. All rights reserved.</p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: var(--background-primary-color);
  padding: 2rem 1rem;
  color: var(--text-secondary-color);
  text-align: center;

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
  }


  p {
    color: var(--text-secondary-color);
    opacity: 0.8;
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 1rem;

  }
`;
