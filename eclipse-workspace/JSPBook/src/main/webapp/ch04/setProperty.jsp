<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Action Tag</title>
</head>
<body>
	<jsp:useBean id="person" class="ch04.com.dao.Person" scope="request" />
	<jsp:setProperty name="person" property="id" value="20230824" />
	<jsp:setProperty name="person" property="name" value="홍길동" />
	<p> 아이디 : <%=person.getId() %>
	<p> 이 름 : <%=person.getName() %>
</body>
</html>