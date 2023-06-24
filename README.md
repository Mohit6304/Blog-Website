# Blog Website
This is a blog website built using React, Node.js, and MySQL. The website allows users to register, log in, and create blog posts. It also provides different sections for people with various interests to explore and interact with the content.

# Features
User Registration: Users can create an account by providing their details such as name, email, and password. The registration process is secure and includes validation checks.

User Login: Registered users can log in to their accounts using their email and password. The login process authenticates the users and provides them access to their personalized content.

Blog Creation: Logged-in users can create new blog posts. They can provide a title, write the content using a rich text editor, and categorize the post into relevant sections.

Section Exploration: The website provides different sections for users to explore based on their interests. Each section contains a collection of blog posts related to a specific topic. Users can browse through the sections, read the posts, and engage in discussions by leaving comments.

Editing and Deleting Posts: Users can edit or delete their own blog posts. This allows them to update the content if needed or remove posts that are no longer relevant.

# Installation and Setup
To run the project locally, follow these steps:

1.Clone the repository: git clone https://github.com/Mohit6304/Blog-Website.git

2.Install dependencies for the frontend:
    -Navigate to the frontend folder: cd frontend
    -Install dependencies: npm install
    
3.Install dependencies for the backend:
    -Navigate to the backend folder: cd backend
    -Install dependencies: npm install
    
4.Set up the MySQL database by executing the necessary SQL scripts. You can find the scripts in the backend/db folder. Adjust the database connection details as needed in backend/db.js.

5.Start the backend server:
    -Navigate to the backend folder: cd backend
    -Start the server: npm start
    
6.Start the frontend development server:
    -Navigate to the frontend folder: cd frontend
    -Start the frontend: npm start
    
7.Open your browser and access the website at http://localhost:3000.


# Database Structure
The project utilizes a MySQL database named "blog" with two tables: "users" and "posts".

1.users table:

    -id (primary key, not null): Unique identifier for each user.
    -username (not null): User's username.
    -password (not null): User's password.
    -img: User's profile image.


2.posts table:

    -id (primary key, not null): Unique identifier for each post.
    -title (not null): Title of the blog post.
    -desc: Description of the blog post.
    -img: Image associated with the blog post.
    -uid (not null): Foreign key referencing the id column in the users table, indicating the user who created the post.
    -category: Category or topic of the blog post.
The uid column in the posts table establishes a relationship with the id column in the users table, linking each post to its corresponding user.

Please ensure that the MySQL database is set up with these table structures before running the projectand Make sure to modify the database connection details in backend/db.js to match your MySQL server configuration. 

Feel free to modify and expand the database schema to suit your specific requirements for the blog website.

Feel free to modify and extend the project according to your specific requirements.
