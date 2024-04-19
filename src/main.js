const Main = () => {
    return <main class="col-md-8">
        <div class="card">                 

            <div id="carouselExample" class="carousel slide">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://crehana-blog.imgix.net/media/filer_public/94/50/9450d035-34c7-492f-adc0-a3414e0a1168/king-koopa.jpg?auto=format&q=50" class="card-img-top" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src="https://neweracap.pe/123602-home_default/Gorro-New-Era-59Fifty-Dark-Blue.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src="https://m.media-amazon.com/images/I/41MYdYVbVXL._AC_.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src="https://neweracap.pe/124820-large_default/Gorro-Red-Bull-REDBULL-9Forty-Multicolor.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                </div>

                <div class="card-body">
                            <h5 class="card-title">La tienda de Koopa</h5>
                            <p class="card-text">En la tienda de Koopa podrás encontrar diferentes tipos de gorras, compra las que más te gusten.</p>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
                    
        </div>

    </main>;
}

export default Main;