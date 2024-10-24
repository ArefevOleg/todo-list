import {createGlobalStyle} from 'styled-components';
import {theme} from './Theme';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }


    body {
        margin: 50px;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.fontWhite};
        line-height: 1.2;
        min-width: 360px; // обязательно!!!!
        background-color: ${theme.colors.darkBg};
    }
    
    .app {
        display: flex;
        gap: 10px;
    }


    a {
        text-decoration: none;
        color: ${theme.colors.fontWhite};
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: #0ccaca;
        border: none;
        cursor: pointer;
        color: ${theme.colors.fontBlack};
        padding: 2px 5px;
    }

    .is-done {
        opacity: 0.5;
    }

    .todolist-title-container {
        display: flex;
        align-items: center;
    }
    
    .inputMain {
        width: 200px;
        margin: 10px;
    }
    
    .todo {
        
    }
`