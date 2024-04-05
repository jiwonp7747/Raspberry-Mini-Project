package ch04.com.dao;

public class GuGuDan {
	private int n; // 구구단 n단 
	
	public GuGuDan(){ // 기본 생성자 
		
	}
	
	public int getN() { // getter
		return n;
	}

	public void setN(int n) { //setter
		this.n = n;
	}

	public int process(int i) { // 곱셈 반환 
		return n*i;
	}
}
