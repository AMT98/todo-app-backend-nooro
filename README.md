# Todo App Backend Documentation

This documentation will guide you through setting up the backend for a Todo List application using **Express.js**, **Prisma**, and **MySQL**.
---

## **Cloning the Repository**

To get started with the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/AMT98/todo-app-backend-nooro.git
    ```

2. Navigate to the project directory:
    ```bash
    cd todo-app-backend-nooro
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

---

## **Prerequisites**

Ensure the following are installed:

- **Node.js** (v18+ recommended)
  - [Download Node.js](https://nodejs.org/)
  - Verify installation:
    ```bash
    node -v
    ```

- **MySQL**
  - Follow the [MySQL Installation Instructions](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)
  - Verify installation:
    ```bash
    mysql --version
    ```

- **Prisma CLI**
  - Install globally:
    ```bash
    npm install -g prisma
    ```

---

## **Backend Setup**

### **Step 1: Setup MySQL Database**

1. Log in to MySQL:
    ```bash
    mysql -u root -p
    ```

2. Create a database:
    ```sql
    CREATE DATABASE todo_app;
    ```

3. Create a user and grant privileges:
    ```sql
    CREATE USER 'todo_user'@'localhost' IDENTIFIED BY 'your_password';
    GRANT ALL PRIVILEGES ON todo_app.* TO 'todo_user'@'localhost';
    FLUSH PRIVILEGES;
    ```

4. Exit MySQL:
    ```sql
    EXIT;
    ```

### **Step 2: Configure Prisma**

1. Initialize Prisma:
    ```bash
    npx prisma init
    ```

2. Edit `.env` file to configure the MySQL connection string:
    ```env
    DATABASE_URL="mysql://todo_user:your_password@localhost:3306/todo_app"
    ```

3. Run the migration to create the database schema:
    ```bash
    npx prisma migrate dev --name create_tasks_table
    ```


### **Step 3: Run the Server**

1. Start the server:
    ```bash
    npm run dev
    ```

    This will start the server at `http://localhost:3000`.

---

