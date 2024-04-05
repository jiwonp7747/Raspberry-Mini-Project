<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Scripting tag</title>
</head>
<body>
	<%! String makeItLower(String data){
			return data.toLowerCase();	
	}%>
	
	<%
		out.println(makeItLower("Hello World"));
	%>
</body>
</html>