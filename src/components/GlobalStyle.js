import {createGlobalStyle}  from 'styled-components';

const GlobalStyle = createGlobalStyle `
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html{
        @media (max-width: 1500px){
            font-size: 80%;
        }
  
    }

    body{
        background-color: #1b1b1b;
        font-family: 'Inter', sans-serif;
    }

    button{
        font-weight: bold;
        font-size: 1.1.rem;
        cursor:pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        font-family: 'Inter', sans-serif;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            background: #23d997;
            color:  white;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 3rem;
        color: white;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
        color: #23d997;
        font-size: 2rem;
    
    }
    a{
        font-size: 1.1.rem;
    }
    
    span{
        font-weight: bold;
        color: #23d997;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

`;

export default GlobalStyle;