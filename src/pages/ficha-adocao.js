import * as React from "react";
import Layout from "../componentes/layout";
import { Link } from "gatsby";

export default function FichaDeAdocaoPage({location}) {
  const animal = location.state?.animal;
  return (
    <Layout title="Home Page">
      <h1>Ficha de Adoção</h1>
      {animal ? (
        <div>
          <h2>{animal.nome}</h2>
          <p><strong>Nome Científico:</strong> {animal.nomeCientifico}</p>
          {animal.hero_image && (
            <img
              src={animal.hero_image}
              alt={animal.hero_image_alt || "Imagem do animal"}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </div>
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
