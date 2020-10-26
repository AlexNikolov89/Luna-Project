import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
`;

export const defaultTheme = {
    primaryColor: "#F2F2F2"
};
