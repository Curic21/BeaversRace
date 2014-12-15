
<%-- 
    Document   : infologin
    Created on : Jan 19, 2013, 9:28:49 AM
    Author     : rafa
--%>
<%@page import="net.daw.bean.UsuarioBean"%>
<%UsuarioBean user = (UsuarioBean) request.getSession().getAttribute("usuarioBean");%>                   
<p class="navbar-text pull-right">           
    <%if (user != null) {%>
    <%
        String us = user.getLogin();
        String usuario = us.substring(0, 1).toUpperCase() + us.substring(1);
        String permisos = null;
        
        switch (user.getTipoUsuario()){
            case 0: 
               permisos = "Jugador";
                break;
            case 1:
                permisos = "Administrador";
                break;
        };
        
    %>
    Estás logueado como <%=usuario%> / <%=permisos%>&nbsp;&nbsp;&nbsp;&nbsp;
    <a class="navbar-link" href="jsp?ob=usuario&op=logout">(Salir del sistema)</a>
    <%} else {%>
    <a class="navbar-link" href="jsp?op=login01&ob=usuario">Login</a>
    <a class="navbar-link" href="jsp?op=register01&ob=usuario">Registrarse</a>
    <%}%>
</p>