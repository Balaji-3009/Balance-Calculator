# Balance Calculator
  This project provides a Node.js and MongoDB-based API for uploading cryptocurrency trade data from a CSV file and querying the asset-wise balance at any given timestamp.
## Prerequisites
  - Node.js installed
  - MongoDB Atlas account
# Installation:
  ## Clone the repository
  ## Install dependencies:
    npm install
  ## Database Setup(Mongodb)
    1. Create a MongoDB Atlas Account
      Sign Up:
      Go to MongoDB Atlas.
      Sign up for an account if you don't have one. If you already have an account, log in.
    2. Create a New Cluster
      Create a New Cluster:
      After logging in, you'll be directed to the MongoDB Atlas dashboard.
      Click on the "Build a Cluster" button.
      Configure Cluster:
        Cloud Provider & Region: Choose your preferred cloud provider (e.g., AWS, Google Cloud, Azure) and the region closest to your location for better performance.
        Cluster Tier: Select a tier. The M0 Sandbox (Free Tier) is available if you want to start for free.
        Cluster Name: Give your cluster a name. You can leave the default name or choose a custom one.
        Create Cluster:
          Click "Create Cluster." It will take a few minutes for MongoDB to set up your cluster.
    3. Configure Security
      Add Your IP Address:
      Go to the "Security" section in the left-hand menu and select "Network Access."
      Click on "Add IP Address."
      You can add your current IP address, or use 0.0.0.0/0 to allow access from anywhere (not recommended for production environments).
      Create a Database User:
      Go to the "Security" section in the left-hand menu and select "Database Access."
      Click on "Add New Database User."
      Enter a username and password. You’ll use these credentials to connect to your database.
      Assign the user a role, typically "Atlas Admin" for full access.
    4. Connect to Your Cluster
      Get Connection String:
      Go to the "Clusters" section in the left-hand menu.
      Click on the "Connect" button for your cluster.
      Choose "Connect your application."
      Select your driver and version. For Node.js, choose the Node.js driver and version 3.6 or later.
      You'll be provided with a connection string. It looks something like this:
        mongodb+srv://<username>:<password>@<cluster-url>/test?retryWrites=true&w=majority
      Replace it with the string on line 13.
# Usage:
## Start the server:
  node server.js
### Use an API testing tool like Postman or cURL to upload a CSV file.
    - Open Postman and create a new POST request.
    - Set the request URL to `http://localhost:3001/upload`.
    - In the "Body" tab, select "form-data".
    - Add a new field with the key `file`, change the type to `File`, and select the CSV file from your system.
    - Click "Send".

### Query Asset-Wise Balance

#### Send a `POST` request to the `/balance` endpoint with a JSON body containing the timestamp.
### Example using Postman:
    - Open Postman and create a new POST request.
    - Set the request URL to `http://localhost:3000/balance`.
    - In the "Body" tab, select "raw" and choose "JSON" from the dropdown.
    - Enter the JSON body:
        ```json
        {
          "timestamp": "2022-09-28 12:00:00"
        }
        ```
    - Click "Send".

## API Endpoints

### Upload CSV

- **URL:** `/upload`
- **Method:** `POST`
- **Content-Type:** `multipart/form-data`
- **Form Data:**
  - `file`: The CSV file containing trade data.
- **Success Response:**
  - **Code:** 200
  - **Content:** `File successfully processed and data stored in the database.`
- **Error Response:**
  - **Code:** 400
  - **Content:** `No file uploaded.`
  - **Code:** 500
  - **Content:** `Error storing data in the database: <error_message>`

### Get Asset-Wise Balance

- **URL:** `/balance`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "timestamp": "YYYY-MM-DD HH:MM:SS"
  }
