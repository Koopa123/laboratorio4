const Header = () => {
    return <header class="col-md-12">
        <h1 className ="text-center"> KOOPACAPS</h1>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Gorras</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">

                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#">MLB</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link" href="#">NFL</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">NBA</a>
                                </li>
                                
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Siluetas
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">9forty</a></li>
                                        <li><a class="dropdown-item" href="#">59fifty</a></li>
                                        <li><a class="dropdown-item" href="#">39thirty</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    </header>;
}

export default Header;