package dao;

import java.util.ArrayList;
import dto.Book;

public class BookRepository{
	
	private ArrayList<Book> listOfBooks = new ArrayList<Book>();
	
	public BookRepository() {
	
		Book book1= new Book("ISBN1234","C# 프로그래밍", 27000);
		book1.setAuthor("우재남");
		book1.setDescription("C#을 처음 접하는 독자를 대상으로 일대일 수업처럼 자세히 설명한 책이다. 꼭 알아야 할 핵심 개념은 기본 예제로 최대한 쉽게 설명했으며, 중요한 내용은 응용 예제, 퀴즈, 셀프 스터디, 예제 모음으로 한번 더 복습할 수 있다.");
		book1.setPublisher("한빛아카데미");
		book1.setCategory("IT모바일");
		book1.setUnitsInStock(1000);		
		book1.setReleaseDate("2022/10/06");
		book1.setBookGrade(3.5);
		
		Book book2 = new Book("ISBN1235","자바마스터", 30000);
		book2.setAuthor("송미영");
		book2.setDescription("자바를 처음 배우는 학생을 위해 자바의 기본 개념과 실습 예제를 그림을 이용하여 쉽게 설명합니다. 자바의 이론적 개념→기본 예제→프로젝트 순으로 단계별 학습이 가능하며, 각 챕터의 프로젝트를 실습하면서 온라인 서점을 완성할 수 있도록 구성하였습니다.");
		book2.setPublisher("한빛아카데미");
		book2.setCategory("IT모바일");
		book2.setUnitsInStock(1000);		
		book2.setReleaseDate("2023/01/01");		
		book2.setBookGrade(3.0);
		
		Book book3= new Book("ISBN1236","파이썬 프로그래밍", 30000);
		book3.setAuthor("최성철");
		book3.setDescription(" 파이썬으로 프로그래밍을 시작하는 입문자가 쉽게 이해할 수 있도록 기본 개념을 상세하게 설명하며, 다양한 예제를 제시합니다. 또한 프로그래밍의 기초 원리를 이해하면서 파이썬으로 데이터를 처리하는 기법도 배웁니다.");
		book3.setPublisher("한빛아카데미");
		book3.setCategory("IT모바일");
		book3.setUnitsInStock(1000);		
		book3.setReleaseDate("2023/01/01");		
		book3.setBookGrade(4.0);
		
		Book book4= new Book("ISBN1237","운영체제", 33000);
		book4.setAuthor("황기태");
		book4.setDescription("컴퓨터 시스템의 지배자이며 소프트웨어의 왕인 운영체제를 아는 것은, ‘소프트웨어 개발자’를 꿈꾸는 사람들이 컴퓨터 전문가로 들어서는 기반 지식임을 부인할 수 없습니다. 오늘날 개발자가 되려는 많은 사람들이 프로그래밍 언어를 배우고 코딩을 익혀가고 있습니다. 코딩에 눈을 뜨고 지식이 늘어가면서 다음과 같은 여러 의문들이 생겨나게 됩니다.");
		book4.setPublisher("생능출판");
		book4.setCategory("IT모바일");
		book4.setUnitsInStock(1000);		
		book4.setReleaseDate("2021/12/14");		
		book4.setBookGrade(4.5);
		
		listOfBooks.add(book1);
		listOfBooks.add(book2);
		listOfBooks.add(book3);
		listOfBooks.add(book4);		
	}
	public ArrayList<Book> getAllBooks() {
		return listOfBooks;
	}
}
