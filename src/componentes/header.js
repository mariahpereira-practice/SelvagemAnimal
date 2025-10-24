import * as React from "react";
import * as headerStyles from "./header.module.css"
import { Link } from "gatsby";

export default function Header({title}) {

    return (
        <div className={headerStyles.header}>
                <h3 style={{ color: "white", marginLeft: "15px" }}>{title}</h3>
                <nav className={headerStyles.topnav}>
                    <Link to="/">Início</Link>
                    <Link to="/animal">Ver Animais</Link>
                    <Link to="/about">Sobre nós</Link>
                </nav>
        </div>
    )
}