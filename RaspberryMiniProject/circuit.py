import time
import RPi.GPIO as GPIO

def led_on_off(pin, value):
	GPIO.output(pin, value)

def measure_distance():
	GPIO.output(trig, 1)
	GPIO.output(trig, 0)

	while(GPIO.input(echo) == 0):
		pass

	pulse_start=time.time()
	while(GPIO.input(echo)==1):
		pass

	pulse_end = time.time()
	pulse_duration=pulse_end - pulse_start
	return pulse_duration*340*100/2

trig = 20
echo = 16
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(trig, GPIO.OUT)
GPIO.setup(echo, GPIO.IN)

led = 6
GPIO.setup(led, GPIO.OUT)