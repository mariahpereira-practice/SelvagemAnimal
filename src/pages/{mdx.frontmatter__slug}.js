import * as React from "react";
import Layout from "../componentes/layout";
import { graphql, Link } from "gatsby";

export default function AnimalPost({data, children}) {     
    const animal = data.mdx.frontmatter;      
    return (
        <Layout>
            <h2>{animal.nome}</h2>    
            <p>Nome Científico: {animal.nomeCientifico}</p>
            <p>Habitat: {animal.habitat}</p>
            <p>Dieta: {animal.dieta}</p>
            <p>Curiosidade: {animal.curiosidade}</p>
            {animal.hero_image && (
            <img
              src={animal.hero_image}
              alt={animal.hero_image_alt || "Imagem do animal"}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            )} 
            <nav className="botoes-animal">
                    <Link to="/animal" className="botoes-animal">Ver outros animais</Link>
            </nav>
        </Layout>
    )
}

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        nome
        nomeCientifico
        curiosidade
        dieta
        habitat
        hero_image
        hero_image_alt
        hero_image_credit_text
      }
    }
  }
`;

export const Head = ({data}) => <title>{data.mdx.frontmatter.nome}</title>;
