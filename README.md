# REST API with NodeJS Fastify MongoDB & Swagger

# Installation   
•Install NodeJS v12.x.x  
•Install MongoDB v4.2.x  
•Clone this repo to your computer    
•Open a terminal and navigate to repo directory    
•Install the required dependecies with: npm install  

# Usage   
•From a new terminal create a directory named: mongodb  
•Create a subdirectory named: bandsdata  
•Navigate to the mongodb directory    
•Start MongoDB & use data directory as db with: mongod --dbpath=bandsdata --bind_ip 127.0.0.1      
•From the first terminal start the Fastify server with: npm start    
•From Postman or an HTTP client of your choice make requests to MongoDB  
•From Postman or an HTTP client of your choice use bandEntryTest.json to perform exmaple POST request in application/JSON  
•From your browser navigate to http://127.0.0.1:3000/documentation for self-updating API documentation


# Tasks Performed  
### •Used Mongoose methods to make HTTP requests & parse incoming JSON data  
### •Created Router node module to handle request & response routing  
### •Used Boom methods for HTTP error handling 
### •Used Mongoose to interface between API & database  
•Relational management & translation between API & database Objects via ODM library  
### •Generated Swagger compliant documentation with Fastify-Swagger  
### •Implemented JWT compliance via Fastify-JWT

# Next Steps  
### •User Authentication & Validation handling  
### •React Client & Server Integration
