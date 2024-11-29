import { Link } from "react-router-dom"

function Cardtipo({energia}){
    return(
        <>
        {
            energia.map((pegaenergia) =>(

                <Link to={`tipoenergia/${pegaenergia.slug}`}>
                    <article class="card">
                        <h3>{pegaenergia.tit}</h3>
                        <button class="btn btn-primary">Saiba Mais</button>
                    </article>
                </Link>

            ))
        }
        </>
    )
}
export default Cardtipo