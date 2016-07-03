# react-nodjs
A simple employee database with node , react and postgress sql. also packing app with easy rpm and deploy the app as a service with pm2

Prerequisites:
Node

Instruction to run the app:
npm install #to download the dependencies
node server.js # to start the server on port 3000


App can be deployed as RPM

Grunt #To create the RPM will create a rpm in the working directory
sudo yum install <newly created rpm>

cd to /usr/lib/post-node-react

node server.js #to start the app

#next to run app as a service with pm2