import Cardtipo from "./Cardtipo"
import info from "../Tipos.json"

function Tipos (){
    return(
        <>
            <section id="tipos" class="container py-5">
                <div class="todotipo">
                <h2 class="tittipos">Tipos de Energia</h2>
                <div class="grid-container">
                    <Cardtipo energia={info}/>
                </div>
                </div>
            </section>
        </>
    )
}
export default Tipos