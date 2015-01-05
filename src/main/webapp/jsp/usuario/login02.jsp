<%-- 
    Document   : login02
    Author     : Jordi
--%>
<%@page import="net.daw.bean.UsuarioBean"%>
<% UsuarioBean oUsuario = (UsuarioBean) request.getSession().getAttribute("usuarioBean"); %>
<% if (oUsuario==null){ %>
    <h1>You didn't logged correctly.</h1>
    <h4>There's been a problem with your authentication. Check again your login and password.</h4>
<% } else { %>
    <h1>You logged in.</h1>
    <h3>Welcome <%=oUsuario.getLogin()%>!</h3>
    
<%} %>

<script></script>
