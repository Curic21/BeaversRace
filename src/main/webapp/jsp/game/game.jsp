
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

    <div id="canvasdiv">
        <canvas id="canvas" width="0" height="0"></canvas>
    </div><br/><br/><br/>

    <!-- <div id="tablero">
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
  </div>-->
    <div id="playground">
        <div id="welcomeScreen">
            <div id=start>
                <div id="loadingBar"></div><br>
                <center><a id="startbutton">Start!</a></center>
            </div>
        </div>
        <div id="gQ_scenegraph">
            <div class="gQ_group" id="background">
                <div class="gQ_sprite" id="background1"></div>
                <div class="gQ_sprite" id="background2"></div>
                <div class="gQ_sprite" id="background3"></div>
                <div class="gQ_sprite" id="background4"></div>
                <div class="gQ_sprite" id="background5"></div>
                <div class="gQ_sprite" id="background6"></div>
            </div>
            <div class="gQ_group" id="actors">
                <div class="gQ_group" id="player">
                    <div class="gQ_sprite" id="playerBoostUp"></div>
                    <div class="gQ_sprite" id="playerBody"></div>
                    <div class="gQ_sprite" id="playerBooster"></div>
                    <div class="gQ_sprite" id="playerBoostDown"></div>      
                </div>    
            </div>
            <div class="gQ_group" id="playerMissileLayer"></div>
            <div class="gQ_group" style="" id="enemiesMissileLayer"></div><div class="gQ_group" style="position: absolute; display: block; overflow: visible; height: 250px; width: 700px; -webkit-transform: translate(0px, 0px) rotate(0deg) scale(1, 1);" id="overlay"><div id="shieldHUD" style="color: white; width: 100px; position: absolute; font-family: verdana, sans-serif;"></div><div id="lifeHUD" style="color: white; width: 100px; position: absolute; right: 0px; font-family: verdana, sans-serif;"></div></div></div></div>   

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <% }%>

</div>
