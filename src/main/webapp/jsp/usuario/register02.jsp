<%-- 
    Document   : login02
    Author     : Jordi
--%>
<%@page import="net.daw.bean.UsuarioBean"%>
<% UsuarioBean oUsuario = (UsuarioBean) request.getSession().getAttribute("usuarioRegistrado"); %>
<% if (oUsuario == null) { %>
<h3>Ups! Something happened. Maybe the data is wrong...</h3>
<h2><a href="jsp?op=register01&ob=usuario">Try again</a></h2>

<% } else if (oUsuario.getId() == -1){ %>
<h3>Ups! Something happened. Maybe the username already exists...</h3>
<h2><a href="jsp?op=register01&ob=usuario">Try again</a></h2>

<% } else { %>
<h2>Congratulations!</h2>
<h4>You have registered correctly. Please, goback to <a href="jsp?op=login01&ob=usuario">Log in</a></h4>
<% }

request.getSession().setAttribute("usuarioRegistrado", null);

%>

