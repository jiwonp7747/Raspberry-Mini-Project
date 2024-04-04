let client = null; // MQTT 클라이언트의 역할을 하는 Client 객체를 가리키는 전역변수
let connectionFlag = false; // 연결 상태이면 true
const CLIENT_ID = "client-" + Math.floor((1 + Math.random()) * 0x10000000000).toString(16); // 사용자 ID 랜덤 생성

let ctx = null;
let chart = null;
let config = {
// type은 차트 종류 지정
type: 'line', // 라인그래프
// data는 차트에 출력될 전체 데이터 표현
data: {
// labels는 배열로 데이터의 레이블들
labels: [],
// datasets 배열로 이 차트에 그려질 모든 데이터 셋 표현. 그래프 1개만 있음
datasets: [{
label: '날짜별 독서량 비교',
backgroundColor: 'blue',
borderColor: 'rgb(255, 99, 132)',
borderWidth: 2,
data: [], // 각 레이블에 해당하는 데이터
fill : false, // 채우지 않고 그리기
}]
},
// 차트의 속성 지정
options: {
responsive : false, // 크기 조절 금지
scales: { // x축과 y축 정보
xAxes: [{
display: true,
scaleLabel: { display: true, labelString: '날짜' },
}],
yAxes: [{
display: true,
scaleLabel: { display: true, labelString: '페이지 수' }
}]
}
}
};
let LABEL_SIZE = 30; // 차트에 그려지는 데이터의 개수
let tick = 0; // 도착한 데이터의 개수임, tick의 범위는 0에서 99까지만
function drawChart() {
ctx = document.getElementById('canvas').getContext('2d');
chart = new Chart(ctx, config);
init();
} 
function init() { // chart.data.labels의 크기를 LABEL_SIZE로 만들고 0~19까지 레이블 붙이기
for(let i=0; i<LABEL_SIZE; i++) {
chart.data.labels[i] = i;
}
chart.update();
}
function addChartData() {
const pageNumberInput=document.getElementById("pagenumber");
const pageNumber=parseInt(pageNumberInput.value);

tick++; // 도착한 데이터의 개수 증가
tick %= 100; // tick의 범위는 0에서 99까지만. 100보다 크면 다시 0부터 시작
let n = chart.data.datasets[0].data.length; // 현재 데이터의 개수
if(n < LABEL_SIZE) // 현재 데이터 개수가 LABEL_SIZE보다 작은 경우
chart.data.datasets[0].data.push(pageNumber);
else { // 현재 데이터 개수가 LABEL_SIZE를 넘어서는 경우
// 새 데이터 value 삽입
chart.data.datasets[0].data.push(value); // value를 data[]의 맨 끝에 추가
chart.data.datasets[0].data.shift(); // data[]의 맨 앞에 있는 데이터 제거
// 레이블 삽입
chart.data.labels.push(tick); // tick 값을 labels[]의 맨 끝에 추가
chart.data.labels.shift(); // labels[]의 맨 앞에 있는 값 제거
}
chart.update();
}
function hideshow() { // 캔버스 보이기 숨기기
let canvas = document.getElementById('canvas'); // canvas DOM 객체 알아내기
if(canvas.style.display == "none") // canvas 객체가 보이지 않는다면
canvas.style.display = "inline-block"; // canvas 객체를 보이게 배치
else 
canvas.style.display = "none" ; // canvas 객체를 보이지 않게 배치
}
window.addEventListener("load", drawChart); // load 이벤트가 발생하면 drawChart() 호출하도록 등록


function connect() { // 브로커에 접속하는 함수
    if (connectionFlag == true)
        return; // 현재 연결 상태이므로 다시 연결하지 않음

    // 사용자가 입력한 브로커의 IP 주소와 포트 번호 알아내기
    let broker = document.getElementById("broker").value; // 브로커의 IP 주소
    let port = 9001 // 브로커의 포트 번호

    // id가 message인 DIV 객체에 브로커의 IP와 포트 번호 출력
    document.getElementById("messages").innerHTML += '<span>로그인 완료</span><br/>';


    // MQTT 메시지 전송 기능을 모두 가진 Paho client 객체 생성
    client = new Paho.MQTT.Client(broker, Number(port), CLIENT_ID);

    // client 객체에 콜백 함수 등록 및 연결
    client.onConnectionLost = onConnectionLost; // 접속 끊김 시 onConnectLost() 실행
    client.onMessageArrived = onMessageArrived; // 메시지 도착 시 onMessageArrived() 실행

    // client 객체에게 브로커에 접속 지시
    client.connect({
        onSuccess:onConnect, // 브로커로부터 접속 응답 시 onConnect() 실행
    });
}

// 브로커로부터 접속 성공 응답을 받을 때 호출되는 함수
function onConnect() {
	//document.getElementById("messages").innerHTML+='<span>connected'+'</span><br/>';	
    connectionFlag = true; // 연결 상태로 설정
}

function subscribe(topic){
	if(connectionFlag != true){
		alert("연결되지 않았음");
		return false;
}

document.getElementById("situation").innerHTML='<span>독서시작</span><br/>';
client.subscribe(topic);
}

function publish(topic, msg){
	if(connectionFlag !=true){
		alert("연결되지 않았음");
		return false;
	}
	client.send(topic, msg, 0, false);
}

function unsubscribe(topic){
	if(connectionFlag != true) return;

	document.getElementById("situation").innerHTML='<span>독서중지</span><br/>';
client.unsubscribe(topic, null);
}	 


    // 접속이 끊어졌을 때 호출되는 함수
function onConnectionLost(responseObject) { // responseObject는 응답 패킷
    document.getElementById("messages").innerHTML += '<span>오류 : 접속 끊어짐</span><br/>';
    if (responseObject.errorCode !== 0) {
        document.getElementById("messages").innerHTML += '<span>오류 : ' + responseObject.errorMessage + '</span><br/>';
    }
    connectionFlag = false; // 연결 되지 않은 상태로 설정
    }

    // 메시지가 도착할 때 호출되는 함수
    function onMessageArrived(msg) { // 매개변수 msg는 도착한 MQTT 메시지를 담고 있는 객체
        console.log("onMessageArrived: " + msg.payloadString);
    // 도착한 메시지 출력
    document.getElementById("messages").innerHTML = '<span>페이지 수: '+ msg.payloadString + '</span><br/>';
}


// disconnection 버튼이 선택되었을 때 호출되는 함수
function disconnect() {
if(connectionFlag == false) 
return; // 연결 되지 않은 상태이면 그냥 리턴
client.disconnect(); // 브로커와 접속 해제
document.getElementById("messages").innerHTML += '<span>연결종료</span><br/>';
connectionFlag = false; // 연결 되지 않은 상태로 설정
}