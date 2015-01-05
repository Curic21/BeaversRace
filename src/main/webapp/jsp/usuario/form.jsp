<%-- 
    Document   : form
    Created on : Jan 21, 2013, 10:24:17 AM
    Author     : Jose
--%>
<form class="form-horizontal" action="jsp" id="formulario" name="formulario" method="post">
    <input type="hidden" name="ob" value="usuario" />
    <input type="hidden" name="op" value="register02" />
    <div class="control-group">
        <label class="control-label" for="inputId">Id:</label>
        <div class="controls">
            <input type="text" id="id" name="id" placeholder="id"/>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputLogin">Login:</label>
        <div class="controls">
            <input type="text" id="login" name="login" size="15" placeholder="login" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputPassword">Password:</label>
        <div class="controls">
            <input type="password" id="password" name="password" size="15" placeholder="password" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label"  for="inputPasswordRepite">Repite Password:</label>
        <div class="controls">
            <input type="password" id="passwordRepite" name="passwordRepite" size="15" placeholder="repitePassword" />
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputEmail">E-mail:</label>
        <div class="controls">
            <input type="email" id="inputEmail" placeholder="E-mail" name="email">
        </div>
    </div>
    <div class="control-group">
        <div class="controls">
            <button type="submit" id="submitForm" class="btn submitForm">Submit</button>
        </div>
    </div>
</form>

