import * as React from "react";
import Layout from "../componentes/layout";
import { graphql, Link } from "gatsby";

export default function AnimalPost({data, children}) {     
    const animal = data.mdx.frontmatter;      
    return (
        <Layout>
            <h2 className="titulo">{animal.nome}</h2>
            <div className="flex-container">
              <div className="col-1">
                <p><b>Nome Científico:</b> {animal.nomeCientifico}</p>
                <p><b>Habitat</b>: {animal.habitat}</p>
                <p><b>Dieta:</b> {animal.dieta}</p>
                <p><b>Curiosidade:</b> {animal.curiosidade}</p>
                <nav className="botoes-animal">
                  <Link to={`/ficha-adocao`} state={{
                                                      animal: {
                                                          nome: animal.nome,
                                                          nomeCientifico: animal.nomeCientifico,
                                                          hero_image: animal.hero_image,
                                                          hero_image_alt: animal.hero_image_alt
                                                      }
                                                  }}
                                                  >
                                                  Preencher Ficha de Adoção</Link>
                  <Link to="/animal" className="botoes-animal">Ver outros animais</Link> 
            </nav>
              </div>    
              <div className="col-2">
                {animal.hero_image && (
                <img
                  className="imagem-sobre-animal"
                  src={animal.hero_image}
                  alt={animal.hero_image_alt || "Imagem do animal"}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )} 
              </div>
            </div>            
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
