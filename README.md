# **Notes App**


This is a simple notes application with a back-end built using Hapi.js, a popular Node.js web framework. The back-end API provides CRUD (create, read, update, delete) functionality for managing notes.

## **Features**
- Create a new note
- Get a list of all notes
- Get a single note by ID
- Update an existing note
- Delete an existing note


## **Getting started**

### Prerequisites
To run this application, you need to have the following software installed:
- Node.js
- npm (Node Package Manager)
- Postman v9 (optional)

### Installation
1. Clone the repository to your local machine.
2. Open the command prompt and navigate to the project directory.
3. Run the command npm install to install the project dependencies.
4. Run the command npm start to start the application.

## API documentation
1. Create a new note
- URL: /notes
- Method: POST
- Request body:
```
{
  "title": "Note Title",
  "content": "Note Content"
}
```
- Response body: 
```
{
  "id": "note_id",
  "title": "Note Title",
  "content": "Note Content"
}
```
2. Get a list of all notes
- URL: /notes
- Method: GET
- Response body:
```
[  {    "id": "note_id",    "title": "Note Title",    "content": "Note Content"  },  {    "id": "note_id",    "title": "Note Title",    "content": "Note Content"  },  ...]
```
3. Get a single note by ID
- URL: /notes/{id}
- Method: GET
- Response body:
```
{
  "id": "note_id",
  "title": "Note Title",
  "content": "Note Content"
}
```
4. Update an existing note
- URL: /notes/{id}
- Method: PUT
- Request body:
```
{
  "title": "Updated Note Title",
  "content": "Updated Note Content"
}
```
- Response body:
```
{
  "id": "note_id",
  "title": "Updated Note Title",
  "content": "Updated Note Content"
}
```
5. Delete an existing note
- URL: /notes/{id}
- Method: DELETE
- Response body:
```
{
  "message": "Note deleted successfully"
}
```
### Acknowledgments
- This project was created as part of the **Dicoding Academy** "Belajar Membuat Aplikasi Backend untuk Pemula" course.
- Please check out Dicoding Web Server API (http://notesapp-v1.dicodingacademy.com/)

