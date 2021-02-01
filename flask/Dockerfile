FROM python:2.7
COPY . /app
WORKDIR /app
RUN pip install flask 
EXPOSE 3000
CMD [ "python", "api_server.py" ]
