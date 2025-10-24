import * as React from "react";
import { useState } from "react";
import Layout from "../componentes/layout";
import { Link } from "gatsby";

export default function FichaDeAdocaoPage({location}) {
  const animal = location.state?.animal;
  if(animal == undefined){
    if (typeof window !== "undefined") {
      alert("Nenhum animal foi selecionado para adoção. Você será redirecionado para a página de animais.");
      window.location.href = "/animal";
    }
  }

  const [inputs, setInputs] = useState({nome:"", email:"", animal:animal.nome, mensagem:""});

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
      setInputs({nome:"", email:"", animal:animal.nome, mensagem:""});
  }).catch(error => alert(error));    
};

  return (
    <Layout title="Home Page">
      <h1>Ficha de Adoção - {animal.nome}</h1>
      {animal ? (
        <><div>
          {animal.hero_image && (
            <img
              src={animal.hero_image}
              alt={animal.hero_image_alt || "Imagem do animal"}
              style={{ maxWidth: "100%", height: "auto" }} />
          )}
        </div><div className="container">
                <form name="form_react" method="post" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="form-estatico"></input>
                    <br></br>
                    <label className="label">
                      <span>Animal: {inputs.animal}</span>
                    </label>
                    <br></br>
                    <label className="label">
                        <span>Nome Completo do Adotante:</span>
                        <input type="text" name="nome" value={inputs.nome} onChange={handleChange}></input>
                    </label>
                    <label className="label">
                        <span>E-mail de contato:</span>
                        <input type="text" name="email" value={inputs.email} onChange={handleChange}></input>
                    </label>
                    
                    
                    <br></br>
                    <label className="label">Por que você deseja adotar este animal?
                    </label>
                    <textarea name="mensagem" rows={5} value={inputs.mensagem} onChange={handleChange}></textarea>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="botoes-form">
                      <input type="submit" value="Enviar"></input>
                      <input type="reset" value="Limpar"></input>
                    </div>

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
