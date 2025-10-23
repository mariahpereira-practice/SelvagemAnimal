import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./layout.css"
import Footer from "./footer";
import Header from "./header";

export default function Layout({children}) { 
    
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }    
    `);

    return (
        <main className="layout">
            <Header title={data.site.siteMetadata.title}></Header>
            <div className="main">
                {children}
            </div>
            <Footer copyrightYear={2025} />
        </main>
    )
}