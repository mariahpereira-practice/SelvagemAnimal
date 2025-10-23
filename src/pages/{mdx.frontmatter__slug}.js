import * as React from "react";
import Layout from "../componentes/layout";
import { graphql, Link } from "gatsby";

export default function BlogPost({data, children}) {           
    return (
        <Layout>
            <h2>{data.mdx.frontmatter.title}</h2>    
            <p>Data: {data.mdx.frontmatter.date}</p>
            {children}   
            <Link to="/blog">Ver mais posts</Link>   
        </Layout>
    )
}

export const query = graphql`
    query($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "DD/MM/YY")
            }
        }
    }

`

export const Head = ({data}) => <title>{data.mdx.frontmatter.title}</title>;
