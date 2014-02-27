<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="net.daw.bean.UsuarioBean"%>
<%UsuarioBean user = (UsuarioBean) request.getSession().getAttribute("usuarioBean");%>


<%if (user != null) {%>
    <div class="masthead visible-lg visible-md">
        <ul class="nav nav-justified navbar-fixed-top">
            <li><a href="jsp">Home</a></li>
            <li><a href="#historyp">History</a></li>
          <!--<li><a href="#portfolio">Screenshots</a></li>-->
            <li><a href="#videosp">Videos</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>

<%}else{ %>
 <div class="masthead visible-lg visible-md">
        <ul class="nav nav-justified navbar-fixed-top">
            <li><a href="jsp">Home</a></li>
            <li><a href="#history">History</a></li>
             <!--<li><a href="#portfolio">Screenshots</a></li>-->
            <li><a href="#videos">Videos</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>


<%}%>