const Aside = () => {
    return <aside className="border p-4 rounded">
        <form>

            <div class="mb-4">
                        <label for="exampleDropdownFormNombre" class="form-label">
                        <i data-feather = "user"></i>  Ingrese su nombre completo</label>
                        <input type="text" class="form-control" id="exampleDropdownFormNombre" 
                                placeholder="koopita123"></input>
            </div>
            
            <div class="mb-4">
                        <label for="exampleDropdownFormEmail" class="form-label">
                        <i data-feather = "mail"></i>  Ingrese tu correo</label>
                        <input type="email" class="form-control" id="exampleDropdownFormEmail"
                            placeholder="email@example.com"></input>
            </div>

            <div class="mb-4">
                        <label for="exampleInputPassword1" class="form-label">
                        <i data-feather = "lock"></i>  Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"
                        placeholder="**********"></input>
            </div>

            <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">Verificado</label>
            </div>
            <button type="submit" className="btn secondary">
               <i data-feather = "send"></i> Enviar</button>
        <br></br>
        <br></br>
        <a className="text-decoration-none text-dark" href="#">¿No tienes cuenta? Regístrate</a>
        <br></br>
        <br></br>
        <a className="text-decoration-none text-dark" href="#">¿Olvidaste tu contraseña?  <i data-feather ="frown"></i></a>
        </form>

        
    </aside>;
}

export default Aside;