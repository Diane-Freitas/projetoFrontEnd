import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.header`
width:100%;
height:500px;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
margin-top: 100px;
& img{
    margin-bottom: 30px;
};
& button{
    font-size:16px;
    font-weight:bold;
    margin-bottom: 50px;
    background-color:#C92071;
    width: 220px;
    height: 48px;
    border-radius:4px;
}

`

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <h1>Ops! Página não encontrada.</h1>
      <p>Falha no carregamento. A página não existe ou foi movida.</p>
      <img src="./public/quebrado-computador.jpg" alt="" />
      <Link to="/"><button>Voltar para a página inicial</button></Link>
    </NotFoundContainer>
  );
};

export default NotFoundPage;