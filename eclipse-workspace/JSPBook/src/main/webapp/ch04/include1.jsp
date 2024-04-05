<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>2071151 박지원</title>
</head>
<body>
	<h4>구구단 출력하기</h4>
	
	<jsp:include page="include_data.jsp">
		<jsp:param name="data" value="<%=13%>" />
	</jsp:include>
	
</body>
</html>