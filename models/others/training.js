//import mongoose from "mongoose";
const mongoose = require("mongoose");

/*
São criados pelos administradores e possuem:
- Nome comercial;
- Código único do curso gerado pelo sistema;
- Descrição;
- Carga horária;
- Data de início e fim das inscrições;
- Data de início e fim do treinamento;
- Quantidade mínima e máxima de inscritos para que o treinamento seja ofertado;
- Tarefa seletora:

Aqui deve-se propor um Quiz tradicional:

- O proponente pode cadastrar quantas perguntas quiser;
- A pergunta deve ter pelo menos 3 possíveis respostas, sendo apenas uma verdadeira.
- Seu sistema deve corrigir sozinho e informar ao final quantas perguntas foram acertadas, 
isso deve ficar registrado no histórico do aluno.
- Aos alunos, os treinamentos que estão atualmente no período de inscrição
ficam disponíveis com a possibilidade de se inscrever e desinscrever.

*/

const TrainingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },

  description: {
    type: String,
  },
  initialInscriptionDate: {
    type: Date,
    //required: true,
  },
  finalInscriptionDate: {
    type: Date,
    //required: true,
  },
  initialTrainingDate: {
    type: Date,
    //required: true,
  },

  finalTrainingDate: {
    type: Date,
    //required: true,
  },
  //Carga horária em horas
  workload: {
    type: Number,
    required: true,
  },
  minimumAmount: {
    type: Number,
  },
  maximumAmount: {
    type: Number,
  },
  students: {
    type: Array,
  },
  stage: {
    type: String,
  },
  mentorId: {
    type: String,
  },
});

module.exports = mongoose.model("Training", TrainingSchema);
