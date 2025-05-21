import nav_links from "../../utils/nav_links";
import logo from "../../assets/images/logo.png";
import styled from 'styled-components';
import DarkThemeBtn from "./DarkTheme";


const Navbar = () => {
    return (
        <Wrapper>
          <div className="navbar-container">
            <div className="nav-logo">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <ul className="navbar">
              {nav_links.map((link, index) => (
                  <a key={index} href={link.path} className="nav-link">
                      {link.name}
                  </a>
              ))}
              <a href="/login" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
              </a>
              <a href="/register" className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>
              </a>
              <DarkThemeBtn />
            </ul>
          </div>
        </Wrapper>
    )
}

export default Navbar;

const Wrapper = styled.nav`
  background-color: var(--background-primary-color);
  display: flex;
  box-shadow: 1px 1px var(--background-secondary-color);
  justify-content: space-around;
  padding: 1rem 0;

  svg {
    fill: var(--text-color);
  }

  .nav-logo {
    max-width: 40px;
  }

  .nav-logo img {
    width: 100%;
    height: auto;
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    width: 1200px;
  }

  .nav-link {
    margin-left: 1rem;
    color: var(--text-color);
  }

  .navbar {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }
`
