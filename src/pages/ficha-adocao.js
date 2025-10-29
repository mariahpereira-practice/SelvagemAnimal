import * as React from "react";
import { useState } from "react";
import Layout from "../componentes/layout";
import { Link } from "gatsby";

export default function FichaDeAdocaoPage({location}) {
  const animal = location.state?.animal;

  const [inputs, setInputs] = useState({nome:"", email:"", animal:animal?.nome || "", mensagem:""});

  if(!animal){
    if (typeof window !== "undefined") {
      alert("Nenhum animal foi selecionado para adoção. Você será redirecionado para a página de animais.");
      window.location.href = "/animal";
    }
    return null;
  }

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
  }

  const encode = (data) => {
    return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
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

const handleReset = (event) => {
  event.preventDefault();
  setInputs({nome: "", email: "", animal: animal.nome, mensagem: ""});
};

  return (
    <Layout title="Ficha de Adoção">
      {animal ? (
        <>
        <h3 className="titulo">Ficha de Adoção - {animal.nome}</h3>
        <div className="flex-container ficha-container">
          <div className="col-1">
                <form name="form-react" method="post" onSubmit={handleSubmit} onReset={handleReset} data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="form-react"></input>
                    <input type="hidden" name="bot-field"/>
                    <br></br>
                    <label className="label">
                      <span className="span-nome" name="animal">Animal: {inputs.animal}</span>
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
                    <nav className="botoes-animal">
                      <input type="submit" value="Enviar"></input>
                      <input type="reset" value="Limpar"></input>
                      <Link to="/animal">Ver outros animais</Link>
                    </nav>

                </form>
            </div>
            <div className="col-2">
          {animal.hero_image && (
            <img
              className="imagem-sobre-animal"
              src={animal.hero_image}
              alt={animal.hero_image_alt || "Imagem do animal"}
              style={{ maxWidth: "100%", height: "auto" }} />
          )}
        </div>
            </div>
      </>
      ) : (
        <p>Nenhum animal foi selecionado.</p>
      )}
    </Layout>
  )
}

export const Head = () => <title>Selvagem Animal - Ficha de Adoção</title>
