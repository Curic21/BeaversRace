<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="net.daw.bean.UsuarioBean"%>
<%UsuarioBean user = (UsuarioBean) request.getSession().getAttribute("usuarioBean");%>

<!-- Si el usuario está logueado o no, mostrará la web de un tamaño u otro -->
<% if (user != null) {%>                         
<div>
    <!-- LOGO -->
    <div id="top" class="header" align='center'>
        <div class="vert-text"><h1><img src="img/logo.png" id="logo" /></h1></div>
    </div>
    <!-- /LOGO -->

    <!-- history -->
    <div id="historyp">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 hidden-phone" id="sinopsis3">
                     <img class="imgdesk" alt="" src="img/scroll0.png"/>
            </div>
        </div>
    </div>
    <!-- /history -->

    <!-- Screenshots -->
    <div id="screenshots">
        <div id="container" class='text-center'>
            <div class="row">
                <div class="col-lg-6 col-lg-offset-3">
                    <hr>
                    <h2>Screenshots</h2>   
                </div>
            </div>
            <div id="myCarousel" class="carousel slide">
                <center>
                    <div class="carousel-inner">
                        <div class="item active"><img src="img/img1.png"  alt=""></div>
                        <div class="item"><img src="img/img2.png" alt=""></div>
                        <div class="item"><img src="img/img3.png" alt=""></div>
                        <div class="item"><img src="img/img4.png" alt=""></div>
                        <div class="item"><img src="img/img5.png" alt=""></div>
                    </div>
                </center>
                <!-- <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
                 <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>-->
            </div>
        </div>
    </div>
    <!-- Screenshots -->
    <!-- Download -->
    <div id="download">
        <div id='container' class='text-center'>
            <div class="row">
                <div class="col-lg-6 col-lg-offset-3">
                    <hr>
                    <h2>Download</h2> 
                </div>
                <div><img id="downloadpic" src="img/download.png" alt="download" /></div>
                <div><img id="googleplay" src="img/googleplay.png" alt="googleplay" /></div>
            </div>
        </div>
    </div>

    <!-- Download -->

</div>      

<%} else {%>


<div>
    <!-- LOGO -->
    <div id="top" class="header" align='center'>
        <div class="vert-text"><h1><img src="img/logo.png" id="logo2" /></h1></div>
    </div>
    <!-- /LOGO -->

    <!-- history -->
    <div id="history">
        <div class="container">
            <div class="row">
                    <div class="col-lg-12 text-center hidden-phone" id="sinopsis1">
                    <img class="imgdesk" alt="" src="img/scroll0.png"/>
            </div>
        </div>
    </div>
    <!-- /history -->

    <!-- Screenshots -->
    <div id="screenshots">
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <hr>
                    <h2>Screenshots</h2>   
                </div>
            </div>
            <div id="myCarousel" class="carousel slide">
                <center>
                    <div class="carousel-inner">
                        <div class="item active"><img src="img/img1.png"  alt=""></div>
                        <div class="item"><img src="img/img2.png" alt=""></div>
                        <div class="item"><img src="img/img3.png" alt=""></div>
                        <div class="item"><img src="img/img4.png" alt=""></div>
                        <div class="item"><img src="img/img5.png" alt=""></div>
                    </div>
                </center>
                <!-- <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
                 <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>-->
            </div>
        </div>
    </div>
    <!-- Screenshots -->
    <!-- Download -->
    <div id="download" class="container text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <hr>
                <h2>Download</h2> 
            </div>
            <div>
                <img id="downloadpic" src="img/download1.png" alt="download" />
            </div>
            <div>
                <a href="https://play.google.com/store/apps/details?id=com.FairlyGames.Pixiestale"><img id="googleplay" src="img/googleplay.png" alt="googleplay" /></a>
            </div>
        </div>
    </div>

    <!-- Download -->
</div>
<%}%>

<footer>
    <div id="contact" class='text-center hidden-phone'>
        <div id="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <hr>
                    <h2>Contact</h2>
                </div>
                <div id='contactme'>
                    <p>
                        You can contact me with the next social networks and by e-mail. I'll be glad to recieve all the possible feedback.  
                    </p><br/>
                    <ul class="list-inline">
                        <li class="socialNetwork"><a href="https://plus.google.com/u/0/117592499660421319614/posts"><img src="img/google.png" alt="" /></a>
                        </li>
                        <li class="socialNetwork"><a href="https://twitter.com/Curic21"><img src="img/twitter.png" alt="" /></a>
                        </li>
                        <li class="socialNetwork"><a href="https://www.linkedin.com/profile/view?id=300092268&trk=nav_responsive_tab_profile"><img src="img/linkedin.png" alt="" /></a>
                        </li>
                    </ul><br/>
                    <p><a class="btn-circle"><i class="icon-envelope"></i></a>&nbsp;&nbsp;<b>jorgeeslavabarrera@gmail.com</b></p>

                </div>
                <div id='contactme2' class="hidden-desktop hidden-tablet">
                    <p>
                        You can contact me with the next social networks and by e-mail. I'll be glad to recieve all the possible feedback.  
                    </p><br/>
                    <ul class="list-inline">
                        <li class="socialNetwork"><a href="https://plus.google.com/u/0/117592499660421319614/posts"><img src="img/google.png" alt="" /></a>
                        </li>
                        <li class="socialNetwork"><a href="https://twitter.com/Curic21"><img src="img/twitter.png" alt="" /></a>
                        </li>
                        <li class="socialNetwork"><a href="https://www.linkedin.com/profile/view?id=300092268&trk=nav_responsive_tab_profile"><img src="img/linkedin.png" alt="" /></a>
                        </li>
                    </ul><br/>
                    <p><a class="btn-circle"><i class="icon-envelope"></i></a>&nbsp;&nbsp;<b>jorgeeslavabarrera@gmail.com</b></p>

                </div>
            </div>
        </div>
    </div>

</footer>
