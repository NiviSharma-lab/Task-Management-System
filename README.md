# Task_Management_System

#Installation
1. Install Dependencies: Using npm install
2. Start MongoDB Server: mongod // Make sure you have mongodb installed prior
3. Start the Node.js server: node index.js // Make sure you have node js installed

#API Endpoints
1. Create a task: URL - /api/taskRoutes
                  Method - POST
                  Request Body - {
  "title": "Task Title 3",
  "description": "Task Description",
  "status": "Pending"
}
                  Response - 201 Created


2. Retrieve all tasks: URL - /api/taskRoutes
                       Method - GET
                  
                       Response - 200 OK


3. Retrieve a task by ID: URL - /api/taskRoutes/{id}
                       Method - GET
                  
                       Response - 200 OK


4. Update a task by ID: URL - /api/taskRoutes/{id}
                       Method - PUT
                       Request Body: {
  "title": "Updated Title",
  "description": "Updated Description",
  "status": "In Progress"
}
                        Response: 200 OK

5. Delete a Task by ID: URL - /api/taskRoutes/{id}
                       Method - DELETE
                       Response- 204 No Content


By following these steps, you should be able to create a functional Task Management System with Node.js, MongoDB, and Express, and test it using Postman.


                  
                      
   

   
                  
