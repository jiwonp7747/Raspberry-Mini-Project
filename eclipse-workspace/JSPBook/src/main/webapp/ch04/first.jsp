<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Action Tag</title>
</head>
<body>
	<h3>�� ������ first.jsp�Դϴ�.</h3>
	<jsp:include page="second.jsp">
		<jsp:param value="<%=new java.util.Date() %>" name="date"/>
	</jsp:include>
	<p>Jakarta Server Page</p>
	
</body>
</html>