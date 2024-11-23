import Cardimpacto from "./Cardimpacto"

function Impacto (){

    const dados = [
        {
            tit: 'Economia de Recursos Naturais',
            desc: 'A geração tradicional de energia consome grandes quantidades de água e recursos fósseis, impactando ecossistemas e esgotando reservas naturais. Fontes limpas, como solar e eólica, não demandam esses recursos, ajudando a preservá-los para outros usos essenciais, como abastecimento de água potável e agricultura.',
            img: "/ecorec.jpg",
            tipo: 2
        },
        {
            tit: 'Economia de Recursos Naturais',
            desc: 'A geração tradicional de energia consome grandes quantidades de água e recursos fósseis, impactando ecossistemas e esgotando reservas naturais. Fontes limpas, como solar e eólica, não demandam esses recursos, ajudando a preservá-los para outros usos essenciais, como abastecimento de água potável e agricultura.',
            img: "/ecorec.jpg",
            tipo: 2
        },
        {
            tit: 'Economia de Recursos Naturais',
            desc: 'A geração tradicional de energia consome grandes quantidades de água e recursos fósseis, impactando ecossistemas e esgotando reservas naturais. Fontes limpas, como solar e eólica, não demandam esses recursos, ajudando a preservá-los para outros usos essenciais, como abastecimento de água potável e agricultura.',
            img: "/ecorec.jpg",
            tipo: 2
        },
    ]

    return(
        <>
            <section id="impacto" class="container text-center py-5">
                <div class="todoimpacto">
                    <Cardimpacto impacto={dados}/>
                </div>
            </section>
        </>
    )
}
export default Impacto