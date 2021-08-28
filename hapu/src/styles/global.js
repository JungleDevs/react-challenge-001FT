import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
* {​​​​​​​
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}​​​​​​​

html {​​​​​​​
    /* a cada 1rem será considera 10px */
    font-size: 62.5%;
}​​​​​​​

body {​​​​​​​

    background-color: #F5F7FA;
    color: black;
    -webkit-font-smoothing: antialiased;
    font-family: 'Carme', sans-serif;
}​​​​​​​

 
h1, h2, h3, h4, h5, h6, strong {​​​​​​​
    font-weight: 500;
}​​​​​​​

 
button {​​​​​​​
    cursor: pointer;
}​​​​​​​`;




