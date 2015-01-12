
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
        //ASIGNAMOS UN NOMBRE A CADA TIPO DE USUARIO
        String us = user.getLogin();
        String usuario = us.substring(0, 1).toUpperCase() + us.substring(1);
        String permisos = null;
        
        switch (user.getTipoUsuario()){
            case 0: 
               permisos = "Player";
                break;
            case 1:
                permisos = "Administrator";
                break;
        };
        
    %>
    <%=usuario%> / <%=permisos%>&nbsp;&nbsp;&nbsp;
    <a class="navbar-link" href="jsp?ob=usuario&op=logout">Logout</a>
    <%} else {%>
    <a class="navbar-link" href="jsp?op=login01&ob=usuario">Login</a>&nbsp;&nbsp;
    <a class="navbar-link" href="jsp?op=register01&ob=usuario">Register</a>
    <%}%>
</p>