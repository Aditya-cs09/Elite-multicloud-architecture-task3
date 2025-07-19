# Elite-multicloud-architecture-task3
Frontend on AWS S3 + Backend API on GCP Cloud Run | Multi-cloud architecture
🚀 Task 3: Multi-Cloud Architecture (AWS + GCP)

🎯 Objective

Design a multi-cloud setup where the frontend is on AWS S3 and the backend API is on Google Cloud Run, showcasing interoperability.

🏗️ Architecture

Frontend (HTML/JS): Hosted on AWS S3 (static website)

Backend (Node.js API): Deployed on Google Cloud Run

Connection: Frontend calls backend via HTTPS (CORS enabled)

⚙️ Steps

✅ Created S3 bucket, enabled static website hosting

✅ Uploaded frontend files (index.html)

✅ Built & deployed Node.js API to Cloud Run

✅ Connected frontend to Cloud Run API using fetch()

✅ Verified end-to-end working from browser

🛠️ Tools

AWS S3
Google Cloud Run
Docker
Node.js
HTML/CSS/JS

📷 Screenshots 


S3 bucket config

Frontend files in S3

Cloud Run deployment page

Browser calling backend

Dev Console showing API 

Cloud Run logs

✅ Result

A functioning demo is deployed across two cloud platforms:

AWS S3 serves the frontend

Google Cloud Run handles backend requests

Frontend to backend communication is successful

API responses are visible in browser console

Logs confirm the interoperability between AWS and GCP

This demonstrates a real-world multi-cloud solution where systems hosted on two different cloud providers work together securely and efficiently.
