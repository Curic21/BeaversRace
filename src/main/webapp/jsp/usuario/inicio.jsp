<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="net.daw.bean.UsuarioBean"%>
<%UsuarioBean user = (UsuarioBean) request.getSession().getAttribute("usuarioBean");%>

<!-- Si el usuario está logueado o no, mostrará la web de un tamaño u otro -->
<% if (user != null) {%>                         
<div>
    <!-- LOGO -->
    <div id="top" class="header visible-lg" align='center'>
        <div class="vert-text"><h1><img src="img/logo.png" id="logo" /></h1></div>
    </div>
    <!-- /LOGO -->

    <!-- history -->
    <div id="historyp">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center" id="sinopsis2">
                    <h1>Help Barry to get home!</h1>
                    <div>
                        Barry has been lost into the woods and he doesn't know how to go back home. He only remember that his home is close to the river.<br/><br/>
                        Help Barry to jump through the platforms with your own hands to get back home. The more time you get, the closer you'll be from home.<br/><br/>
                    </div>
                    <div class="list">
                        <b>· Controls:</b>
                        <ul> 
                            <li>- Once you push Start, you'll have to push the screen to Barry begins to run.</li>
                            <li>- If Barry is running, push again the screen to jump.</li>
                        </ul>
                        <b>· Rules:</b>
                        <ul>
                            <li>- If you Jump from a platform, Barry can jump again.</li>
                            <li>- If you let Barry fall from a platform, he will only jump one time.</li>
                            <li>- If you jump and hit Barry with a platform in to his head, he will be unconscious and  unable to jump.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div><br /><br />
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
    <div id="top" class="header visible-lg" align='center'>
        <div class="vert-text"><h1><img src="img/logo.png" id="logo2" /></h1></div>
    </div>
    <!-- /LOGO -->

    <!-- history -->
    <div id="history">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center" id="sinopsis1">
                    <h1>Help Barry to get home!</h1>
                    <div>
                        Barry has been lost into the woods and he doesn't know how to go back home. He only remember that his home is close to the river.<br/><br/>
                        Help Barry to jump through the platforms with your own hands to get back home. The more time you get, the closer you'll be from home.<br/><br/>
                    </div>
                    <div class="list">
                        <b>· Controls:</b>
                        <ul> 
                            <li>- Once you push Start, you'll have to push the screen to Barry begins to run.</li>
                            <li>- If Barry is running, push again the screen to jump.</li>
                        </ul>
                        <b>· Rules:</b>
                        <ul>
                            <li>- If you Jump from a platform, Barry can jump again.</li>
                            <li>- If you let Barry fall from a platform, he will only jump one time.</li>
                            <li>- If you jump and hit Barry with a platform in to his head, he will be unconscious and  unable to jump.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div><br /><br />
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
                <img id="downloadpic" src="img/download.png" alt="download" />
            </div>
            <div>
                <img id="googleplay" src="img/googleplay.png" alt="googleplay" />
            </div>
        </div>
    </div>

    <!-- Download -->
</div>
<%}%>

<footer>
    <div id="contact" class='text-center'>
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
                    <!-- Botón Contacto -->
                    <!--<a href="#myModal" type="button" class="btn" data-toggle="modal">Contact me</a>
                    <!-- Modal -->
                    <!-- <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                         <div class="modal-header">
                             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                             <h3 id="myModalLabel">Contact me!</h3>
                         </div>
                         <div class="modal-body">
                             <p>Feel free to email me to provide some feedback for the game, such as suggestions or 
                                 if you want to collaborate with me in future games.</p>
                         </div>
                         <div class="modal-footer">
                             <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                         </div>
                     </div> 
                 </div>
                    <!-- <div  id="social" class="col-sm-6 col-sm-offset-3 text-center">
                     </div> -->
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
