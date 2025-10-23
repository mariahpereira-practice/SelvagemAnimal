import * as React from "react";
import Layout from "../componentes/layout";

export default function IndexPage() {
  return (
    <Layout title="Home Page">
      <h1>Olá Mundo Gastby!</h1>
      <br></br>
      <p>Este é o primeiro parágrafo .</p>
      <p>Este é o segundo parágrafo .</p>
    </Layout>
  )
}

export const Head = () => <title>Meu Blog - Home</title>
