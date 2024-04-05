<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Action Tag</title>
</head>
<body>
	<h4>구구단 출력하기</h4>
	
	<jsp:useBean id="bean" class="ch04.com.dao.GuGuDan" /> <%--GuGuDan클래스의 bean객체 생성--%>
	<%
		bean.setN(5); // 구구단 단수 set 
		for(int i=1; i<10; i++){ // 1부터 9까지 
			out.println(bean.getN()+"*"+i+"="+bean.process(i)+"<br>"); // 구구단 출력 
		}
	%>
</body>
</html>
