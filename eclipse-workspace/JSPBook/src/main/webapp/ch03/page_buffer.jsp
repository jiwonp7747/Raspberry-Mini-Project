<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Directives Tag</title>
</head>
<body>
	<%@ page buffer ="16kb" import="java.util.Date" %>
	Today is: <%=new Date() %>
</body>
</html>