<%@page import="net.daw.bean.UsuarioBean"%>
<%UsuarioBean user = (UsuarioBean) request.getSession().getAttribute("usuarioBean");%>

<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
    <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Pixie's Tale - Official Website</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!-- <link rel="stylesheet" href="css/videogame.css">-->
        <link rel="stylesheet" href="css/videogame.css"><style>
            body {
                padding-top: 60px;
                padding-bottom: 40px;
            }
        </style>
        <link rel="stylesheet" href="css/bootstrap-responsive.min.css">
        <link rel="stylesheet" href="css/main.css">
        <link href="css/sb-admin.css" rel="stylesheet">

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
                        <%if (user != null) {%>
                        <jsp:include page="jsp/menuSuperior.jsp" />   
                        <% }%>
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
                <div class="row-fluid">
                    <div class="span12"><hr><footer><p>&copy; Rafael Aznar (2013)</p></footer></div>   
                </div>
            </div>
        </div>                    

        <!-- carga de javascript -->

        <!--jQuery-->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <!--------------------------------------->

        <!--Bootstrap-->
        <script src="js/vendor/bootstrap.min.js"></script>   
        <!--------------------------------------->

        <!--Archivos Locales-->
        <script src="js/util.js" charset="UTF-8"></script>
        <script src="js/main.js" charset="UTF-8"></script>
        <script src="js/control/alumno.js" charset="UTF-8"></script>
        <script src="js/control/usuario.js" charset="UTF-8"></script>
        <script src="js/control/requerimiento.js" charset="UTF-8"></script>
        <script src="js/control/profesor.js" charset="UTF-8"></script>
        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <!--------------------------------------->

        <!--Videojuego-->
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
        <script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
        <script src="./js/vendor/jquery.validate.min.js"></script>
        <script src="./js/vendor/Box2dWeb-2.1.a.3.min.js"></script>
        <script src="./js/vendor/Box2dWeb-2.1.a.3.js"></script>
        <script src="./js/framework.js"></script>
        <script src="./js/videogame.js"></script>
        <script src="jquery.mousewheel.js"></script>
        <!--------------------------------------->



        <script type="text/javascript">
            var x = 1;
            var y = 1;
            var obstaculos = new Array(10);

            for (i = 1; i < 11; i++) {

                obstaculos[i] = new Array(10);

            }


            obstaculos[2][9] = 1;
            obstaculos[5][9] = 1;
            obstaculos[6][9] = 1;
            obstaculos[7][9] = 1;
            obstaculos[8][7] = 1;
            obstaculos[9][7] = 1;
            obstaculos[8][9] = 1;
            obstaculos[9][9] = 1;
            obstaculos[6][8] = 1;


            $(document).ready(function() {

                $("body").keypress(function(e) {


                    switch (e.which) {

                        case 100: //pulsamos 'D'

                            if (x < 10) {
                                //alert(obstaculos[x+1][y]);
                                if (obstaculos[x + 1][y] != 1) {
                                    $('#pac').animate({"left": "+=1em"}, 500);
                                    $('#cerrado').animate({opacity: 1}, 200, function() {
                                        $('#izquierda').css("opacity", "0");
                                        $('#arriba').css("opacity", "0");
                                        $('#abajo').css("opacity", "0");
                                        $('#derecha').css("opacity", "1");
                                        $('#cerrado').animate({opacity: 0}, 200);
                                    });
                                    x += 1;
                                    $('#equis').val(x);
                                }
                            }
                            break;

                        case 97: //pulsamos 'A'

                            if (x > 1) {
                                if (obstaculos[x - 1][y] != 1) {

                                    $('#pac').animate({"left": "-=1em"}, 500);
                                    $('#cerrado').animate({opacity: 1}, 200, function() {
                                        $('#derecha').css("opacity", "0");
                                        $('#arriba').css("opacity", "0");
                                        $('#abajo').css("opacity", "0");
                                        $('#izquierda').css("opacity", "1");
                                        $('#cerrado').animate({opacity: 0}, 200);
                                    });
                                    x -= 1;
                                    $('#equis').val(x);
                                }
                            }

                            break;

                        case 115: //pulsamos 'S'

                            if (y < 10) {
                                if (obstaculos[x][y + 1] != 1) {
                                    $('#pac').animate({"top": "+=1em"}, 500);
                                    $('#cerrado').animate({opacity: 1}, 200, function() {
                                        $('#izquierda').css("opacity", "0");
                                        $('#arriba').css("opacity", "0");
                                        $('#derecha').css("opacity", "0");
                                        $('#abajo').css("opacity", "1");
                                        $('#cerrado').animate({opacity: 0}, 200);
                                    });
                                    y += 1;
                                    $('#ygriega').val(y);
                                }
                            }

                            break;

                        case 119: //pulsamos 'W'

                            if (y > 1) {
                                if (obstaculos[x][y - 1] != 1) {
                                    $('#pac').animate({"top": "-=1em"}, 500);
                                    $('#cerrado').animate({opacity: 1}, 200, function() {
                                        $('#izquierda').css("opacity", "0");
                                        $('#derecha').css("opacity", "0");
                                        $('#abajo').css("opacity", "0");
                                        $('#arriba').css("opacity", "1");
                                        $('#cerrado').animate({opacity: 0}, 200);
                                    });
                                    y -= 1;
                                    $('#ygriega').val(y);
                                }
                            }

                    }
                });

            });


        </script>	
        <script>

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


            $('#lnkAlumno').unbind('click');
            $('#lnkAlumno').click(function() {
                var alumno = objeto('alumno', '<%=request.getContextPath()%>');
                var alumnoView = vista(alumno, '<%=request.getContextPath()%>');

                $('#indexContenidoJsp').empty();
                $('#indexContenido').empty().append(alumnoView.getEmptyList());

                var alumnoControl = control_alumno_list('<%=request.getContextPath()%>');
                alumnoControl.inicia(alumnoView, 1, null, null, 10, null, null, null, null);
                return false;
            });

            $('#lnkProfesor').unbind('click');
            $('#lnkProfesor').click(function() {
                var profesor = objeto('profesor', '<%=request.getContextPath()%>');
                var profesorView = vista(profesor, '<%=request.getContextPath()%>');

                $('#indexContenidoJsp').empty();
                $('#indexContenido').empty().append(profesorView.getEmptyList());

                var profesorControl = control_profesor_list('<%=request.getContextPath()%>');
                profesorControl.inicia(profesorView, 1, null, null, 10, null, null, null, null);
                return false;
            });


            $('#lnkRequerimiento').unbind('click');
            $('#lnkRequerimiento').click(function() {
                var requerimiento = objeto('requerimiento', '<%=request.getContextPath()%>');
                var requerimientoView = vista(requerimiento, '<%=request.getContextPath()%>');

                $('#indexContenidoJsp').empty();
                $('#indexContenido').empty().append(requerimientoView.getEmptyList());

                var requerimientoControl = control_requerimiento_list('<%=request.getContextPath()%>');
                requerimientoControl.inicia(requerimientoView, 1, null, null, 10, null, null, null, null);
                return false;
            });
        </script>
    </body>
</html>

