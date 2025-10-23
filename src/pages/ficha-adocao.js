import * as React from "react";
import { useState } from "react";
import Layout from "../componentes/layout";
import { Link } from "gatsby";

export default function FichaDeAdocaoPage({location}) {
  const animal = location.state?.animal;

  const [inputs, setInputs] = useState({nome:"", email:"", assunto:"", mensagem:""});

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
  }

  const encode = (data) => {
    return Object.keys(data)
    .map(key => encodeURIComponent(key) + '-' + encodeURIComponent(data[key])).join('&');
}

const handleSubmit = (event) => {
  event.preventDefault();
  fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: encode({"form-name": "form-react", ...inputs})
  }).then(() => {
      alert("Em breve daremos uma resposta de seu contato! Obrigado(a)!");
      setInputs({nome:"", email:"", assunto:"", mensagem:""});
  }).catch(error => alert(error));    
};

  return (
    <Layout title="Home Page">
      <h1>Ficha de Adoção</h1>
      {animal ? (
        <><div>
          <h2>{animal.nome}</h2>
          <p><strong>Nome Científico:</strong> {animal.nomeCientifico}</p>
          {animal.hero_image && (
            <img
              src={animal.hero_image}
              alt={animal.hero_image_alt || "Imagem do animal"}
              style={{ maxWidth: "100%", height: "auto" }} />
          )}
        </div><div className="container">
                <form name="form_react" method="post" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="form-estatico"></input>
                    <label>Nome:
                        <input type="text" name="nome" value={inputs.nome} onChange={handleChange}></input>
                    </label>
                    <label>E-mail:
                        <input type="text" name="email" value={inputs.email} onChange={handleChange}></input>
                    </label>
                    <label>Assunto:
                        <input type="text" name="assunto" value={inputs.assunto} onChange={handleChange}></input>
                    </label>
                    <label>Mensagem:
                        <textarea name="mensagem" rows={5} value={inputs.mensagem} onChange={handleChange}></textarea>
                    </label>
                    <input type="submit" value="Enviar"></input>
                    <input type="reset" value="Limpar"></input>
                </form>
            </div></>
      ) : (
        <p>Nenhum animal foi selecionado.</p>
      )}
      <br></br>
      <nav className="botoes-animal">
        <Link to="/animal" className="botoes-animal">Ver outros animais</Link>
      </nav>
    </Layout>
  )
}

export const Head = () => <title>Selvagem Animal - Ficha de Adoção</title>
