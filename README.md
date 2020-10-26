# Super Tic-Tac-Toe

Software Engineering 2 project deliverable. See the documents folder for more info.

# PreRequisite

* xampp application to run MySQL database and Apache server [Download from here](https://www.apachefriends.org/index.html).
* Download Node js LTS version and install it in your operating system. [Download from here](https://nodejs.org/en/download/)
* Postman a desktop app or you can use it [chrome extension](https://chrome.google.com/webstore/category/extensions) for API testing.[Download from here](https://www.getpostman.com/apps) 

# Table Creation In DB

1. Create Table `user` with `id,email,username,password` columns, see file in `documents/user.sql`.

# Get Started

1.  Clone this repo
    * `$ git clone https://github.com/comphonia/super_tic-tac-toe_backend.git`
2. Navigate into the cloned directory and install the dependencies
    * `cd super_tic-tac-toe_backend`
    * `$ npm install`
3. Launch Environment:
    * `$ npm start`
4. Open in browser:
    * open `http://localhost:9890`



# API Usage 
    Utilize postman to make requests for the best experience as browsers only serve a [GET] resource by default.

1. signup route - `http://localhost:9890/api/signup`
     * pass json object containing email, username and password [POST].
2. login route - `http://localhost:9890/api/login`
     * pass json object containing email, username and password [POST].
3. other CRUD route are in the secureApi - e.g.  `localhost:9890/secureApi/user`.
     * In all GET, PUT, DELETE and POST request you will need the `token` in header which is issued after a successful login.

Example object for login request (body as JSON object) -

```json
{
    "username":"test",
    "password":"testpass"
}
```

> Note: You have to pass the `token` for each request as "header" while accessing the `/secureApi`.

# Features

* Basic operations `Create`, `Read`, `Update` and `Delete`.
* Uses Express framework.
* Uses JWT Token for security and authentication of API.
* MVC structure in which `Route`, `Service` and `Model` layer.
* Uses AJV as schema validator which validate request and response schema.
* Uses Connection Pooling which lead to reduce number of connection at any point of time and reduce stress in DB which leads to better availability and Performance of DB.
* Uses common error structure format for all type of error throwing in Application.
* `nodemailer` is used to send mail over SMTP.
* `bcryptjs` is used to encrypt your password through salt and hashing technique and which won't store password as plain text in database.