import * as React from "react";
import Layout from "../componentes/layout";
import { graphql,Link,useStaticQuery } from "gatsby";

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
            <p>Esses são os nossos animais:</p>
            {posts.map((item) => {
                return (
                    <article key={item.id}>
                        <h2>{item.frontmatter.nome}</h2>
                        {item.frontmatter.hero_image && (
                            <img
                                src={item.frontmatter.hero_image}
                                alt={item.frontmatter.hero_image_alt || "Imagem do animal"}
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                            )}
                        <p>Nome Científico: {item.frontmatter.nomeCientifico}</p>
                        <nav className="botoes-animal">
                                <Link to={`/${item.frontmatter.slug}`}>Ver mais sobre</Link>
                                <Link to={`/ficha-adocao`} 
                                state={{
                                    animal: {
                                        nome: item.frontmatter.nome,
                                        nomeCientifico: item.frontmatter.nomeCientifico,
                                        hero_image: item.frontmatter.hero_image,
                                        hero_image_alt: item.frontmatter.hero_image_alt
                                    }
                                }}
                                >
                                Preencher Ficha de Adoção</Link>
                        </nav>
                        
                        <p>{item.excerpt}</p>
                        {posts.length > 1 && posts.indexOf(item) !== posts.length - 1 && <hr/>}
                    </article>
                );
            })}
        </Layout>
    );
}

export const Head = () => <title>Selvagem Animal - Animais</title>;