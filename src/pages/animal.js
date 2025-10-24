import * as React from "react";
import Layout from "../componentes/layout";
import { graphql,Link,useStaticQuery } from "gatsby";
import AnimalCard from "../componentes/animalCard.js"; // Importe o novo componente

export default function AnimalPage() {
    const data = useStaticQuery(graphql`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        hero_image
                        hero_image_alt
                        nome
                        nomeCientifico
                        slug
                    }
                    id
                    excerpt
                }
            }
        }
    `);

    const posts = data.allMdx.nodes;
    
    return (
        <Layout>
            <h2 className="titulo">Animais Disponíveis:</h2>
            <div className="animal-grid">
                {posts.map((item) => (
                    <AnimalCard key={item.id} animal={item.frontmatter} />
                ))}
            </div>
        </Layout>
    );
}

export const Head = () => <title>Selvagem Animal - Animais</title>;