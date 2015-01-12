
<!--FORMULARIO PARA LA EDICIÓN DEL USUARIO-->

<form class="form-horizontal" action="#" id="formulario" name="formulario">
    <input type="hidden" name="tipoUsuario" value="0" />
    <div class="control-group">
        <label class="control-label" for="inputId">Id:</label>
        <div class="controls">
            <input type="text" id="id" name="id" placeholder="id" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputLogin">Nickname:</label>
        <div class="controls">
            <input type="text" id="login" name="login" size="15" placeholder="Nickname" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputPassword">Password:</label>
        <div class="controls">
            <input type="password" id="password" name="password" size="15" placeholder="Password" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputEmail">E-mail:</label>
        <div class="controls">
            <input type="email" id="email" placeholder="E-mail" name="email">
        </div>
    </div>
    <div class="control-group">
        <div class="controls">
            <button type="submit" id="submitForm" class="btn submitForm">Submit</button>
        </div>
    </div>
</form>

