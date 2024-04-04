from flask import Flask, render_template, request
app=Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT']=0

@app.route('/')
def index():
	return render_template('mini.html')

@app.route('/data/', methods=['GET'])
def data():
	f= open('./data.txt', 'r')
	data=f.readline().strip()
	dic={}
	
	while data:
		nowTime, executionTime, pageCount=data.split(',')
		dic[nowTime]={'executionTime': executionTime, 'pageCount': pageCount}
		data=f.readline().strip()

	f.close()
	return render_template('data.html', dict=dic)

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=8080, debug=True)
