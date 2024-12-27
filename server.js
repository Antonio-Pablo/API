import express, { json } from "express";

const app = express();
const users = [];
app.use(express.json());
//rota de criação de usuario
app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json("Ok Post certo");
});
//rotas de listagem de usuarios
app.get("/users", (req, res) => {
  res.status(200).json(req.body);
});
app.listen(3000);


/*
    Cria nossa API de usuarios
    - Criar um Usuário
    - Listar Usuários
    - Editar Usuário
    - Deletar Usuário
    */
