<%@page import="net.daw.bean.UsuarioBean"%>
<%UsuarioBean user = (UsuarioBean) request.getSession().getAttribute("usuarioBean");%>
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Beaver's Race - Official Website</title>
        <meta name="description" content="This is the Official site of Beaver's Race the Videogame!">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-responsive.min.css">
        <link rel="stylesheet" href="css/main.css">
        <link href="css/sb-admin.css" rel="stylesheet">

        <style>
            body {
                padding-top: 60px;
                padding-bottom: 40px;
            }
        </style>

        <!--jQuery-->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
        <script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
        <script src="./js/vendor/jquery.validate.min.js"></script>
        <!--------------------------------------->

    </head>
    <body>
        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> 
                        <span class="icon-bar"></span> 
                        <span class="icon-bar"></span> 
                        <span class="icon-bar"></span>
                    </a>                 
                    <div class="nav-collapse collapse">                    
                        <jsp:include page="jsp/menuSuperior.jsp" />    
                        <jsp:include page="jsp/usuario/infologin.jsp" />                        
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row-fluid">
                <%
                    if (user != null) {
                        out.print("<div class=\"span2\">");
                %>
                <jsp:include page="jsp/menuLateral.jsp" />
                <%
                        out.print("</div>");
                    }
                %>
                <%
                    if (user != null) {
                        out.print("<div class=\"span10\">");
                        out.print("<div id=\"indexContenido\"></div>");
                    } else {
                        out.print("<div class=\"span12\">");
                    }
                %>
                <div id="indexContenidoJsp">
                    <jsp:include page='<%=(String) request.getAttribute("contenido")%>' />                
                </div>
                <%
                    out.print("</div>");
                %>    
                <center>
                    <!--LICENCIA -->
                    <div class="row-fluid">
                        <hr>
                        &copy; <b>Jorge Eslava (2015)</b>

                        <br /><br />

                        <!--tipo de Licencia-->
                        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                            <img alt="Licencia de Creative Commons" style="border-width:0" 
                                 src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
                    </div>
                </center>


                <!-- Info de la Licencia
                 <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" 
                       property="dct:title" rel="dct:type">Beaver's Race</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="aversrace-jordieslava.rhcloud.com" 
                       property="cc:attributionName" rel="cc:attributionURL">Jorge Eslava</a> is licensed under a <a rel="license" 
                       href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                     Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional License</a>.
                -->
            </div></center>
    </div>
</div>                    

<!-- carga de javascript -->

<!--Bootstrap-->
<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/vendor/bootstrap-transition.js"></script>
<script src="js/vendor/bootstrap-alert.js"></script>
<script src="js/vendor/bootstrap-modal.js"></script>
<script src="js/vendor/bootstrap-dropdown.js"></script>
<script src="js/vendor/bootstrap-scrollspy.js"></script>
<script src="js/vendor/bootstrap-tab.js"></script>
<script src="js/vendor/bootstrap-tooltip.js"></script>
<script src="js/vendor/bootstrap-popover.js"></script>
<script src="js/vendor/bootstrap-button.js"></script>
<script src="js/vendor/bootstrap-collapse.js"></script>
<script src="js/vendor/bootstrap-carousel.js"></script>
<script src="js/vendor/bootstrap-typeahead.js"></script>   
<!--------------------------------------->

<!--Archivos Locales-->
<script src="js/util.js" charset="UTF-8"></script>
<script src="js/main.js" charset="UTF-8"></script>
<script src="js/control/usuario.js" charset="UTF-8"></script>
<script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
<!--------------------------------------->


<!-- Custom JavaScript for Smooth Scrolling and SideMenu Links-->     
<script>
            $(function() {
                //'a[href*=#]'
                $('a[href*=#]').click(function() {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: target.offset().top
                            }, 1000);
                            return false;
                        }
                    }
                });
            });

            $('#myCarousel').carousel({
                interval: 3000
            });

            $('#lnkGame').unbind('click');
            $('#lnkGame').click(function() {
                var game = objeto('game', '<%=request.getContextPath()%>');
                var gameView = vista(game, '<%=request.getContextPath()%>');

                $('#indexContenidoJsp').empty();
                $('#indexContenido').empty().append(gameView.getEmptyList());

                var gameControl = control_game_list('<%=request.getContextPath()%>');
                gameControl.inicia(gameView, 1, null, null, 10, null, null, null, null);
                return false;
            });


            $('#lnkUsers').unbind('click');
            $('#lnkUsers').click(function() {
                var usuario = objeto('usuario', '<%=request.getContextPath()%>');
                var usuarioView = vista(usuario, '<%=request.getContextPath()%>');

                $('#indexContenidoJsp').empty();
                $('#indexContenido').empty().append(usuarioView.getEmptyList());

                var usuarioControl = control_usuario_list('<%=request.getContextPath()%>');
                usuarioControl.inicia(usuarioView, 1, null, null, 10, null, null, null, null);
                return false;
            });
</script>
</body>
</html>

