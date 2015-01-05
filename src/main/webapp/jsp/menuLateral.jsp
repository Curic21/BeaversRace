<%@page import="net.daw.bean.UsuarioBean"%>
<%UsuarioBean user = (UsuarioBean) request.getSession().getAttribute("usuarioBean");%>

<div class="well sidebar-nav">
    <li class="nav-header">Main Menu</li>
    <ul class="navbar nav-list">
        <li><a id="lnkHome"  href="jsp">Home</a></li>
        <li><a id="lnkGame"  href="jsp?ob=game&op=game">Videogame</a></li>
            <% if (user.getTipoUsuario() == 1) {%>
        <li><a id="lnkUsers"  href="#">User's Panel</a></li>
            <% }%>
    </ul>
</div>
