# Like Button Backend API
This is the backend for the dynamic like button on the [GitHub Pages website](https://hongjinhao.github.io).
It provides a Java Data API server using express, node.js in JavaScript. 

- **Express API endpoints**:
  - `GET /api/likeCount`: Retrieve the current like count.
  - `PUT /api/likeCount/increase`: Increment the like count.
  - `PUT /api/likeCount/decrease`: Decrement the like count.
- **Middleware**:
  - Logger for request logging.
  - CORS policy with support for specific origins.

The database stores the like button presses. It is a MySQL database with the following rows and columns for example.  
<img src="https://github.com/user-attachments/assets/31f4426b-2a38-4a4d-bf14-dc24f3440e87" alt="Database Diagram" width="400">



For deploying the web app to the cloud, I have success with using these free services:
- freesqldatabase [https://www.freesqldatabase.com/]
  - This is a MySQL cloud hosting service.
  - ![image](https://github.com/user-attachments/assets/873bea02-68bf-43ae-9960-60bb14475337)
  - Note: you won't be allowed to create your own database name when using free tier, but this is not an issue. 
- render [https://render.com/]
  - This is a web service where you can deploy your backend API
  - Look up online how to step up the web service with proper environmental variables to connect to the MySQL cloud server.
  - Lastly, after setting up these servers, modify the frontend to fetch from the production url provided by render.
  - Note: The free server will stop after about 15 mins of inactivity, you will have to deploy it again manually. 
