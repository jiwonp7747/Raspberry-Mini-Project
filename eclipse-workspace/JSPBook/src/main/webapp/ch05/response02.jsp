<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Implicit Objects</title>
</head>
<body>
	<p> �� �������� 5�ʸ��� ���ΰ�ħ �˴ϴ�.
		<%
			response.setIntHeader("Refresh", 5);
		%>
	<p><%=(new java.util.Date()) %>
</body>
</html>