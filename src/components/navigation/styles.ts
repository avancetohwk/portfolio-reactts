import styled from 'styled-components';

interface INav {
  open: boolean;
  href?: string;
}

export const StyledBurger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#000' : '#000'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #fdfdfdfa;
  align-items: center;
  position: relative;
  

  @media (max-width: 678px) {
    width: 100vw;
  }

  span {
    font-size: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px !important;
      }
    }
  }

`

export const Ul = styled.ul<INav>`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    width: 100%;
    top: 0;
    justify-content: flex-end;
    margin-top: 0px;
    
    font-size: 18px;
    
    padding: 0;
    margin: 0;


    

  

  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    cursor: pointer;

    &:hover {
      color: #0DADEA;
    }
  }

  li {
    padding: 2em 1em;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 180px;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;
    align-items:center;
    background: rgb(195 195 195 / 25%);
    box-shadow: 0 8px 5px 0 rgb(31 38 135 / 37%);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    padding: 1em;

    // #navlink-container{
        
    // }

    li {
      color: #000;

      &:hover {
        color: #0DADEA;
      }
    }

    li:first-of-type {
        margin-top: 5em;
      }

  }
`

export const Logo = styled.img`
  margin: 2em 1em;
  width: 3em;
  height: 3em;
  object-fit: contain;
  border-radius: 50%;
  display: none;
  @media screen and (min-width:769px){
      display:flex
  }

`

export const LogoUl = styled.img`
  display: none;
  border-radius: 50%;
  @media (max-width: 768px) {
    display: flex;
    width: 3em;
    height: 3em;
    object-fit: contain;
    position: absolute;
    left: 0;
    margin: 0.5em;
  }
`
export const Icon = styled.div`
  width: 100vw;
  height: calc(100vh - 112px);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    pointer-events: none;
    object-fit: contain;

    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
    }
  }

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
  }
`