import styled from "styled-components";
import { useUiContext } from "../../layouts/HomeLayout";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const DarkThemeBtn = () => {
    const {isDarkTheme, toggleDarkTheme} = useUiContext();

    return (
        <Wrapper>           
            <input onChange={toggleDarkTheme} type="checkbox" id="darkmode-toggle" checked={isDarkTheme === true}/>
            <label htmlFor="darkmode-toggle">
                <BsFillSunFill className="sun"/>
                <BsFillMoonFill className="moon"/>
            </label>
        </Wrapper>    
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    label {
        width: 50px;
        height: 20px;
        position: relative;
        display: block;
        background-color: var(--white);
        border-radius: 200px;
        box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), 
                    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
        cursor: pointer;
        transition: 1s;
    }
    
    label:after {
        content: "";
        width: 18px;
        height: 18px;
        position: absolute;
        top: 1px;
        left: 2px;
        background: var(--background-secondary-color);
        border-radius: 180px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        transition: 1s;
    }

    input {
        width: 0;
        height: 0;
        visibility: hidden;
    }
    
    input:checked + label {
        background-color: #242424;
    }
    
    input:checked + label:after {
        left: 49px;
        transform: translateX(-100%);
        background: linear-gradient(180deg, #777, #3a3a3a);
    }
    
    label:active:after {
        width: 26px;
    }

    label .sun {
        position: absolute;
        font-size: 12px;
        top: 4px;
        left: 4.9px;
        z-index: 100;
        transition: 0.3s;
        color: var(--black);
    }
    
    label .moon {
        position: absolute;
        font-size: 12px;
        top: 4px;
        right: 3.5px;
        z-index: 100;
        color: var(--grey-600);
    }

    input:checked + label .sun {
        color:var(--grey-600);
    }
    
    input:checked + label .moon {
        color: var(--white);
    }
`;  

export default DarkThemeBtn;