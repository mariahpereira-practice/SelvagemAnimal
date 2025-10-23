import * as React from "react";
import Layout from "../componentes/layout";
import { graphql, Link } from "gatsby";

export default function AnimalPost({data, children}) {           
    return (
        <Layout>
            <h2>{data.mdx.frontmatter.nome}</h2>    
            <p>Data: {data.mdx.frontmatter.nomeCientifico}</p>
            {children}   
            <Link to="/animal">Ver mais posts</Link>   
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
