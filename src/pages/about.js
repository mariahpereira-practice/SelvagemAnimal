import * as React from "react";
import Layout from "../componentes/layout";

export default function About() {
  return (
    <Layout title="Home Page">
      <h1 className="titulo">Sobre o projeto</h1>
        <p>Este é um projeto para um curso de FullStack em Desenvolvimento com Gatsby e JamStack.</p>
        <p>O objetivo é criar um site informativo sobre animais, utilizando Gatsby para gerar páginas estáticas a partir de arquivos MDX.</p>
        <p>Nada aqui é real, é tudo fictício e criado apenas para fins educacionais.</p>
    </Layout>
  )
}