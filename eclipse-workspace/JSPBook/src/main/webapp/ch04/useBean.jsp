<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Action Tag</title>
</head>
<body>
	<h4>������ ����ϱ�</h4>
	
	<jsp:useBean id="bean" class="ch04.com.dao.GuGuDan" /> <%--GuGuDanŬ������ bean��ü ����--%>
	<%
		bean.setN(5); // ������ �ܼ� set 
		for(int i=1; i<10; i++){ // 1���� 9���� 
			out.println(bean.getN()+"*"+i+"="+bean.process(i)+"<br>"); // ������ ��� 
		}
	%>
</body>
</html>
