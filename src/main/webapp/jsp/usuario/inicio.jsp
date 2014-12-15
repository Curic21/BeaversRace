<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="net.daw.bean.UsuarioBean"%>
<%UsuarioBean user = (UsuarioBean) request.getSession().getAttribute("usuarioBean");%>


<%if (user != null) {%>
                               
<div>
<!-- LOGO -->
<div id="top" class="header visible-lg" align='center'>
    <div class="vert-text"><h1><img src="img/logo.png" id="logo" /></h1></div>
</div>
<!-- /LOGO -->

<!--TRAILER -->
<div align="center" class="trailer visible-lg visible-md">
    <iframe width="700" height="400" 
            src="//www.youtube.com/embed/WUfDvKVAc5o" frameborder="0" allowfullscreen></iframe>
</div><br />
<!-- /TRAILER-->

<!-- history -->
<div id="historyp">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center" id="sinopsis2">
                <h1>Once upon a time...</h1>
                <p class="lead">In a far far away Kingdom called Helliva, There was a little baby fairy and her name was Ondina. She was the most beautiful princess that the kingdom ever had.<br/>
                    But one day,  Themira the old witch, wanted to steal her marvelous beauty because of her jealousy. She was getting older and how she wanted to live forever, she had to eat the youngest princess of that time
                    because it is the only way to be inmortal.<br/> 
                    However, the plan of Themira fell through thanks to the guardians of the palace and she only had time to eat the little wings of the princess Ondina.<br/>
                    With that, Themira could live a few years more, so she swore that she would return for eat the rest of the princess and that she will live forever.<br/>
                </p>
            </div>
        </div>
    </div>
</div><br /><br />
<!-- /history -->

<!-- Videos -->
<div id="videosp">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-lg-offset-3 text-center">
                <h2>Videos</h2>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <div id="video2" align="center">
                    <video controls>
                        <source src="../../video/video2.webm" type="video/webm">
                        <source src="../../video/video2.mp4" type="video/mp4">
                    </video>
                    <div id="button2" class="col-sm-3 text-center">
                        <button class="btn btn-lg btn-success">Trailer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><br /><br />
<!-- /Videos -->

<!-- Footer -->
<footer>
    <div id="contact" class="container text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Contact</h2>
                <hr>
                <p id="contact1" class="hidden-xs">Feel free to email me to provide some feedback for the game, such as suggestions for new levels, or just to say hello!</p>
                <p id="email2" class="visible-xs">jordieslavabarrera@gmail.com</p>
            </div>
            <div  id="social" class="col-sm-6 col-sm-offset-3 text-center">
            </div> 

        </div>
    </div>
</footer>
<!-- /Footer -->
</div>      
                    
               <%}else {%>
          
                    
<div>
<!-- LOGO -->
<div id="top" class="header visible-lg" align='center'>
    <div class="vert-text"><h1><img src="img/logo.png" id="logo2" /></h1></div>
</div>
<!-- /LOGO -->

<!--TRAILER -->
<div align="center" class="trailer visible-lg visible-md">
    <iframe width="700" height="400" 
            src="//www.youtube.com/embed/WUfDvKVAc5o" frameborder="0" allowfullscreen></iframe>
</div><br />
<!-- /TRAILER-->

<!-- history -->
<div id="history">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center" id="sinopsis1">
                <h1>Once upon a time...</h1>
                <p class="lead">In a far far away Kingdom called Helliva, There was a little baby fairy and her name was Ondina. She was the most beautiful princess that the kingdom ever had.<br/>
                    But one day,  Themira the old witch, wanted to steal her marvelous beauty because of her jealousy. She was getting older and how she wanted to live forever, she had to eat the youngest princess of that time
                    because it is the only way to be inmortal.<br/> 
                    However, the plan of Themira fell through thanks to the guardians of the palace and she only had time to eat the little wings of the princess Ondina.<br/>
                    With that, Themira could live a few years more, so she swore that she would return for eat the rest of the princess and that she will live forever.<br/>
                </p>
            </div>
        </div>
    </div>
</div><br /><br />
<!-- /history -->

<!-- Videos -->
<div id="videos">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-lg-offset-3 text-center">
                <h2>Videos</h2>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <div id="video2" align="center">
                    <video controls>
                        <source src="./video/video2.webm" type="video/webm">
                        <source src="./video/video2.mp4" type="video/mp4">
                    </video>
                    <div id="button2" class="col-sm-3 text-center">
                        <button class="btn btn-lg btn-success">Trailer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><br /><br />
<!-- /Videos -->

<!-- Footer -->
<footer>
    <div id="contact" class="container text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Contact</h2>
                <hr>
                <p id="contact1" class="hidden-xs">Feel free to email me to provide some feedback for the game, such as suggestions for new levels, or just to say hello!</p>
                <p id="email2" class="visible-xs">jordieslavabarrera@gmail.com</p>
            </div>
            <div  id="social" class="col-sm-6 col-sm-offset-3 text-center">
                <!--
                <ul class="list-inline">
                    <li><i class="fa fa-facebook fa-3x"></i>
                    </li>
                    <li><i class="fa fa-twitter fa-3x"></i>
                    </li>
                    <li><i class="fa fa-dribbble fa-3x"></i>
                    </li>
                </ul>-->
            </div> 

        </div>
    </div>
</footer>
<!-- /Footer -->
</div>
               <%}%>

      