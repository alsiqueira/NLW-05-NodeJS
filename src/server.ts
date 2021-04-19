import express, { request, response } from 'express';

const app = express();

app.get("/", (request, response) =>{
  return response.json({message: "ola NLW05"})
})

app.post("/", (request, response) =>{
  return response.json({message: "Usuario salvo com sucesso!"})
})

app.listen(3333, () => console.log("Server is running on port 3333"))