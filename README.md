# File Metadata Microservice

This is the File Metadata Microservice project, part of the FreeCodeCamp (FCC) curriculum. This project was designed to help me learn how to create a microservice that can handle file uploads and return metadata about the uploaded files.

## Overview

In this project, I built a microservice that allows users to upload a file and receive a JSON response with metadata about the file, such as its name, type, and size. This was a great way to learn about handling file uploads and working with middleware in a Node.js environment.

## Project Link

Instructions for building your project can be found at [FreeCodeCamp - File Metadata Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice)

## What I Learned

Through this project, I learned how to:

- Set up a basic Node.js and Express server.
- Handle file uploads using middleware such as `multer`.
- Extract and return metadata from uploaded files.
- Work with JSON responses and manage routing in an Express application.
- Understand and implement RESTful API principles in a microservice architecture.

### Example Response

```json
{
  "name": "example.png",
  "type": "image/png",
  "size": 12345
}
```

### Technology Stack
 - Node.js: 
 - Express.js: web framework for Node.js.
 - Multer: Middleware for handling multipart/form-data(primarily used for uploading files)
 - JavaScript: language used for building the server-side logic and handling file operations.

#### Cool Features
As a matter of fact, I added some extra modifications and allowed users to be able to upload multiple files with Multer. It wasn't very difficult to implement, but it was cool to learn the differences between uploading one file and uplaoding multiple files into the spreadsheet.
