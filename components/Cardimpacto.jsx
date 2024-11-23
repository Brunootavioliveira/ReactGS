
function Cardimpacto({impacto}){
    return(
        <>
        {
            impacto.map((pegaimpacto) => (
                <div class="contesquerda">
                    <img class="imgimpacto" src="/ecorec.jpg" alt=""/>
                    <div class="cont-p">
                        <h4 class="tit-proj">Economia de Recursos Naturais</h4>
                        <p class="desc-p">A geração tradicional de energia consome grandes quantidades de água e 
                        recursos fósseis, impactando ecossistemas e esgotando reservas naturais. Fontes limpas, como solar e eólica, 
                        não demandam esses recursos, ajudando a preservá-los para outros usos essenciais, como abastecimento de água potável e agricultura.</p>
                    </div>
                </div>
            
            ))
        }
        </>
    )
}
export default Cardimpacto