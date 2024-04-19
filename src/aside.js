const Aside = () => {
    return <aside>
        <form>

            <div class="mb-4">
                        <label for="exampleDropdownFormNombre" class="form-label">Ingrese tu nombre Completo</label>
                        <input type="text" class="form-control" id="exampleDropdownFormNombre" 
                                placeholder="koopita123"></input>
            </div>
            
            <div class="mb-4">
                        <label for="exampleDropdownFormEmail" class="form-label">Ingrese tu correo</label>
                        <input type="email" class="form-control" id="exampleDropdownFormEmail"
                            placeholder="email@example.com"></input>
            </div>

            <div class="mb-4">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"
                        placeholder="**********"></input>
            </div>

            <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">Verificado</label>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>

        <a class="dropdown-item" href="#">¿No tienes cuenta? Regístrate</a>
        
        <a class="dropdown-item" href="#">¿Olvidaste tu contraseña?</a>
    </aside>;
}

export default Aside;