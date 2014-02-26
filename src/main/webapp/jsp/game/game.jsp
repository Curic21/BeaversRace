
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="net.daw.bean.UsuarioBean"%>
<div>

    <% UsuarioBean oUsuario = (UsuarioBean) request.getSession().getAttribute("usuarioBean");%>


    <% if (oUsuario != null) {%>

    <style>

        #tablero{
            width: 10em;
            height: 10em;
            border: 3px blue ridge;
            position: relative;
            background-color: white;
            margin-left: 30em;
        }

        #arriba, #abajo, #cerrado, #izquierda{
            opacity:0;
        }

        #pac{
            position: absolute;
        }

        img{
            width: 1em;
            height: 1em;
            position: absolute;
        }

        #obstaculo2, #obstaculo3, #obstaculo4, #obstaculo5, #obstaculo6, #obstaculo7, #obstaculo8, #obstaculo9, #obstaculo10,  #obstaculo11{
            position: absolute;
            background-color: grey;
        }

        #obstaculo1{
            width: 2em;
            height: 3em;
            top: 3em;
            left: 4em;
            border: 1px blue ridge;
            position: absolute;
        }

        #obstaculo2{
            width: 3em;
            height: 1em;
            top: 1em;
            left: 1em;
        }

        #obstaculo3{
            width:4em;
            height: 1em;
            top: 1em;
            left: 5em;
        }

        #obstaculo4{
            width: 1em;
            height: 1em;
            top: 3em;
            left: 8em;
        }

        #obstaculo5{
            width: 1em;
            height: 2em;
            top: 3em;
            left: 7em;
        }

        #obstaculo6{
            width: 2em;
            height: 1em;
            top: 6em;
            left: 7em;
        }

        #obstaculo7{
            width: 1em;
            height: 1em;
            top: 7em;
            left: 5em;
        }

        #obstaculo8{
            width: 5em;
            height: 1em;
            top: 8em;
            left: 4em;
        }

        #obstaculo9{
            width: 1em;
            height: 1em;
            top: 8em;
            left: 1em;
        }

        #obstaculo10{
            width: 1em;
            height: 5em;
            top: 3em;
            left: 2em;
        }

        #obstaculo11{
            width: 1em;
            height: 2em;
            top: 5em;
        }

    </style>


    <div>
        <p>Coordenada X<input type=text id="equis" value="1" /></p>	
        <p>Coordenada Y<input type=text id="ygriega" value="1" /></p>			
    </div> 

    <div id="tablero">
        <div id="pac">
            <img id="derecha" src="./img/pac-1.png" />
            <img id="arriba" src="./img/pac-2.png" />
            <img id="izquierda" src="./img/pac-3.png" />
            <img id="abajo" src="./img/pac-4.png" />
            <img id="cerrado" src="./img/pac-0.png" />
        </div>

        <div id="obstaculo1">
        </div>

        <div id="obstaculo2">
        </div>

        <div id="obstaculo3">
        </div>

        <div id="obstaculo4">
        </div>

        <div id="obstaculo5">
        </div>

        <div id="obstaculo6">
        </div>

        <div id="obstaculo7">
        </div>

        <div id="obstaculo8">
        </div>

        <div id="obstaculo9">
        </div>

        <div id="obstaculo10">
        </div>

        <div id="obstaculo11">
        </div>
    </div>


    <div id="c2canvasdiv">
        <canvas id="c2canvas" width="640" height="480"></canvas>
    </div>

    <% }%>

</div>
