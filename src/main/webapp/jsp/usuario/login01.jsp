

<!--FORMULARIO PARA INICIAR SESIÓN-->

<form id="loginForm" action="jsp" class="form-horizontal" method="post">
    <h1>Login's Form</h1>
    <input type="hidden" name="ob" value="usuario" />
    <input type="hidden" name="op" value="login02" />
    <div class="control-group">
        <label class="control-label" for="inputLogin">Nickname:</label>
        <div class="controls">
            <input type="text" id="inputLogin" autofocus="autofocus" placeholder="User's name" name="login">
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputPassword">Password:</label>
        <div class="controls">
            <input type="password" id="inputPassword" placeholder="Password" name="password">
        </div>
    </div>
    <div class="control-group">
        <div class="controls">
            <button id="entrarBTN" type="submit" class="btn">Login</button>
        </div>
    </div>
</form>

<!--VALIDACIÓN DE LOS DATOS INSERTADOS -->

<script>
    $('#loginForm').validate({
        rules: {
            login: {
                required: true,
                maxlength: 255
            },
            password: {
                required: true,
                maxlength: 255
            }
        },
        highlight: function(element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function(element) {
            element
                    .text('OK!').addClass('valid')
                    .closest('.control-group').removeClass('error').addClass('success');
        }
    });
</script>

