import flask,json
from flask import request

server = flask.Flask(__name__)

@server.route('/login',methods=['get','post'])
def login():

 if request.method == 'GET':
    username = request.values.get('name')
    pwd=request.values.get('pwd')

    if username and pwd:
        if username == 'gavin' and pwd == '111':
            resu={'code':200,'message':'success'}
            return json.dumps(resu,ensure_ascii=False)
        else:
            resu={'code':-1,'message':'failed'}
            return json.dumps(resu,ensure_ascii=False)

    else:
        resu={'code':1001,'message':'equal null'}
        return json.dumps(resu,ensure_ascii=False)

 elif request.method == 'POST':
    username = request.form.get('name') 
    pwd = request.form.get('pwd')
    resu={'pwd':pwd,'name':username}
    return json.dumps(resu,ensure_ascii=False)

if __name__== '__main__':
    server.run(debug=True,port = 3000,host='0.0.0.0')
