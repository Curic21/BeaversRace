<%-- 
    Document   : login
    Created on : Jan 15, 2013, 11:54:03 AM
    Author     : rafa
--%>

<form id="loginForm" action="jsp" class="form-horizontal" method="post" >
    <h1>Register's Form</h1>
    <input type="hidden" name="ob" value="usuario" />
    <input type="hidden" name="op" value="register02" />
    <div class="control-group">
        <label class="control-label" for="inputUser">Nickname:</label>
        <div class="controls">
            <input type="text" id="inputUser" autofocus="autofocus" placeholder="User's name" name="user">
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputPassword">Password:</label>
        <div class="controls">
            <input type="password" id="inputPassword" placeholder="Password" name="password">
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputPassword2">Rewrite Password:</label>
        <div class="controls">
            <input type="password" id="inputPassword2" placeholder="Rewrite Password" name="password2">
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
            <button id="entrarBTN" type="submit" class="btn">Register</button>
        </div>
    </div>
</form>
<script>
    $('#loginForm').validate({
        rules: {
            user: {
                required: true,
                maxlength: 255
            },
            password: {
                required: true,
                maxlength: 255
            },
            password2: {
                required: true,
                maxlength: 255,
                equalTo: "#inputPassword"
            },
            email: {
                required: true,
                maxlength: 255,
                email: true
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