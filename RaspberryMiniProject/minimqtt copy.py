import time
import paho.mqtt.client as mqtt
import circuit
import RPi.GPIO as GPIO
from adafruit_htu21d import HTU21D
import busio

isStart=0
pageCount=0
startDistance=30
btn_status=0
num=0

led=6
button=21
sda=2
scl=3


def storetotxt(nowTime, executionTime, pageCount):
	filename="data.txt"
	with open(filename, 'a') as file:
    data =f"{nowTime}, {executionTime}, {pageCount}\n"
    file.write(data)
	

def led_on_off(pin, value):
	GPIO.output(pin, value)

def button_pressed(pin):
	global isStart
	global btn_status
	global led
	isStart+=1
	isStart%=3
	print("press")

def on_connect(client, userdata, flag, rc):
	client.subscribe("led", qos=0)

def on_message(client, userdata, msg):
	num=int(msg.payload);
	
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(led, GPIO.OUT)
GPIO.setup(button, GPIO.IN, GPIO.PUD_DOWN)

GPIO.add_event_detect(button,GPIO.RISING, button_pressed, 40)

ip = "localhost"

client=mqtt.Client()
client.on_connect=on_connect
client.on_message=on_message

client.connect(ip, 1883)
client.loop_start()

while True:
	global execution, nowTime, executionTime
	executionTime=None
	
	if isStart==0:
		print("isStart: 0")
		pageCount=0
		now=time.localtime()
		nowTime = "%04d/%02d/%02d %02d:%02d" % (
            	now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min)
		start = time.time()
		time.sleep(3)
	if isStart==1:
		print("isStart: 1")
		distance=circuit.measure_distance()
		time.sleep(3)
		
		if distance<startDistance-20:
			pageCount+=1
			print("pageCount 증가: %d" %pageCount)
			client.publish("content", pageCount, qos=0)
			time.sleep(3)
		
	if isStart==2:
		print("isStart:2")
		end=time.time()
		execution = end-start
		executionTime = "%2d분 %02d초" % (
                    execution / 60, execution % 60)
		
		print("save")
		storetotxt(nowTime, executionTime, pageCount)
		isStart=False
		time.sleep(3)
	
	

client.loop_stop()
client.disconnect()