import * as React from "react";
import * as headerStyles from "./header.module.css"
import { Link } from "gatsby";

export default function Header({title}) {

    return (
        <div className={headerStyles.header}>
                <h3>{title}</h3>
                <nav className={headerStyles.topnav}>
                    <Link to="/">Início</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
        </div>
    )
}