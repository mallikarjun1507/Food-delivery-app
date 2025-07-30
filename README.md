
 --Food Delivery App – Setup & Run Instructions----
 
 Tech Stack--
 
Frontend: React (Vite)

Backend: Node.js + Express

Database: MySQL

--Configure MySQL Database----
--Open  MySQL (MySQL Workbench)--

CREATE DATABASE fooddb;  ,

USE fooddb;  ,

CREATE TABLE fooddb (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    image VARCHAR(255)
); 

--- Create .env File in backend/------

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Root
DB_NAME=fooddb


---Clone the Repository----

git clone https://github.com/mallikarjun1507/Food-delivery-app.git
cd Food-delivery-app ,
code .

---Backend Setup (/backend)--
-- Install Dependencies---

cd backend ,
npm install  ,

 ---Run the Backend Server---

node server.js


---Frontend Setup (/frontend)---
--- Install Dependencies---
cd ../frontend ,
npm install,

--- Run React App---
npm run dev




