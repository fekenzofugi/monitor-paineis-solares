import styled from 'styled-components';
import home_banner from "../../assets/images/undraw_firmware_3fxd.svg";

const HomeBanner = () => {
  return (
    <Wrapper>
      <div className="home-banner-container">
        <img src={home_banner} alt="Home Banner" className="home-banner" />
        <h3 className="home-banner-phrase">Speak Japanese Anytime, Anywhere!</h3>
      </div>
    </Wrapper>
  )
}

export default HomeBanner;

const Wrapper = styled.div`
  background-color: var(--background-primary-color);
  display: flex;
  justify-content: center; 
  .home-banner{
    width: 100%; 
  }
  .home-banner-container {
    max-width: 1200px;
    display: grid;
    grid-template-columns: 3fr 2fr;
  }
  .home-banner-phrase {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 700px) {
    .home-banner-container {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .home-banner-phrase {
      margin-top: 1rem;
    }
  }
`
