import * as React from "react";
import { Link } from "gatsby";
import "./animalCard.css"; // Opcional: adicione estilos específicos para o card

export default function AnimalCard({ animal }) {
    return (
        <article className="animal-card">
            <div className="nome-animal">
                <h3>{animal.nome}</h3>
                <span>({animal.nomeCientifico})</span>
            </div>
            {animal.hero_image && (
                <img
                    src={animal.hero_image}
                    alt={animal.hero_image_alt || "Imagem do animal"}
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            )}
            <nav className="botoes-animal">
                <Link to={`/${animal.slug}`}>Ver mais sobre</Link>
                <Link
                    to={`/ficha-adocao`}
                    state={{
                        animal: {
                            nome: animal.nome,
                            nomeCientifico: animal.nomeCientifico,
                            hero_image: animal.hero_image,
                            hero_image_alt: animal.hero_image_alt,
                        },
                    }}
                >
                    Preencher Ficha de Adoção
                </Link>
            </nav>
        </article>
    );
}