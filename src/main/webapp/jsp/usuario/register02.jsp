<%-- 
    Document   : login02
    Author     : Jordi
--%>
<%@page import="net.daw.bean.UsuarioBean"%>
<% UsuarioBean oUsuario = (UsuarioBean) request.getSession().getAttribute("usuarioRegistrado"); %>
<% if (oUsuario == null) { %>
<h1>Lamentablemente ha ocurrido un error. Es posible que haya ingresado mal los datos. </h1>
<h4>Intente de nuevo registrarse <a href="jsp?op=register01&ob=usuario">aquí</a></h4>

<% } else if (oUsuario.getId() == -1){ %>
<h1>Ha ocurrido un error. Probablemente el usuario ya exista.</h1>
<h4>Intente de nuevo registrarse <a href="jsp?op=register01&ob=usuario">aquí</a></h4>

<% } else { %>
<h1>¡Muchísimas Gracias!</h1>
<h4>Se ha registrado correctamente. Por favor, vuelva al <a href="jsp?op=login01&ob=usuario">Inicio de sesión</a></h4>
<% }

request.getSession().setAttribute("usuarioRegistrado", null);

%>

