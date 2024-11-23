
function Banner (){
    return(
        <>
            <section id="intro" class="container text-center py-5">
                <h2>Energia para as pessoas. Progresso para sociedade. Buscando o melhor.</h2>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/pricipal.jpg" class="d-block w-100 imgcarrosel" />
                        </div>
                        <div class="carousel-item">
                            <img src="/principal2.jpg" class="d-block w-100 imgcarrosel" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Próximo</span>
                    </a>
                </div>
            </section>
        </>
    )
}
export default Banner