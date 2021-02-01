vue demo for both flask api and express api

1. git clone to local nodejs server.
2. cd vue, npm run build, cp -r dist ../nginx/, you may need to change the server api IP in the default.conf of nginx folder.
3. docker-compose -f docker-compose-flask.yml up -d, to run vue demo with flask api.
4. docker-compose -f docker-compose-express.yml up -d, to run vue demo with express api.
