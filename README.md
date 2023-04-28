# docker101

#This a repository for practicing with docker and making some Dockerfiles for different applications


1. flask-app
   - made basic flask app and dockerized it 
   - running well and as expected
   - reference - official docker documentation & flask documentation
   - to run the applaication use command -
      - docker build . -t <image_name>
      - docker run -d -p 5000:5000 <image_name>

next up - looking to dockerize python django or a node app

2. node-app
   - made basic node app and dockerized it
   - running well and as expected
   - reference - official docker documentation & nodejs documentation
   - to run the applaication use command 
      - docker build . -t <image_name>
      - docker run -d -p 3000:3000 <image_name>
 

3. flask-redis-app
   - made a simple flask app dependent on redis
   - running well and as expected
   - reference - https://youtu.be/XkLyX2CT1Ro
   - to run the application use command 
      - docker compose up -d
      - or if want to run without docker compose then we need to modify dockerfile and add docker network for containers to run together depended on each other for data exchange.
  
