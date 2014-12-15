<%@page import="net.daw.bean.UsuarioBean"%>
<%UsuarioBean user = (UsuarioBean) request.getSession().getAttribute("usuarioBean");%>
<!-- Side Menu -->
<!-- <a id="menu-toggle" href="#" class="btn btn-primary btn-lg toggle"><i class="fa fa-bars"></i></a>
 <div id="sidebar-wrapper">
     <ul class="sidebar-nav">
         <a id="menu-close" href="#" class="btn btn-default btn-lg pull-right toggle"><i class="fa fa-times"></i></a>
         <li class="sidebar-brand"><a href="http://startbootstrap.com">Start Bootstrap</a>
         </li>
         <li><a href="#top">Home</a>
         </li>
         <li><a href="#about">About</a>
         </li>
         <li><a href="#services">Services</a>
         </li>
         <li><a href="#portfolio">Portfolio</a>
         </li>
         <li><a href="#contact">Contact</a>
         </li>
     </ul>
 </div>
<!-- /Side Menu -->

<div class="well sidebar-nav">
    <li class="nav-header">Panel de Usuario</li>
    <ul class="navbar nav-list">
        <li><a id="lnkHome"  href="jsp">Home</a></li>
        <li><a id="lnkGame"  href="jsp?ob=game&op=game">Game</a></li>
            <% if (user.getTipoUsuario() == 1) {%>
        <li><a id="lnkUsers"  href="#">Panel de usuarios</a></li>
            <% }%>
        <li><a id="lnkRequerimiento" href="#">Clasifications</a></li>
        <li><a id="lnkLogout" href="jsp?ob=usuario&op=logout">Logout</a></li>
    </ul>
</div>
