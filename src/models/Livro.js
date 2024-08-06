import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: 
      {
        type: String, 
        required: [true, "o título do livro é obrigatório"],
      },
      autor: 
        {
          type: mongoose.Schema.Types.ObjectId, 
          ref: "autores",
          required: [true, "o(a) autor(a) é obrigatório"],
        },
    editora: 
      {
        type: String, 
        required: [true, "a editora é obrigatória"],
        // enum: 
        //   {
        //     values: ["Casa do Código", "Alura"],
        //     message: "A editora {VALUE} não é válida."
        //   },
      },
    numeroPaginas: 
      {
        type: Number,
        // min: [1, "O número fornecido foi {VALUE}. O número mínimo de páginas é 1."],
        // max: [50560, "O número fornecido foi {VALUE}. O número máximo de páginas é 50560"],
        validate: 
          [
            {
              validator: (valor) => 
                {
                    return Number.isInteger(valor)        
                },
              message: "O número fornecido foi {VALUE}. O número de páginas deve ser inteiro.",
            },
            {
              validator: (valor) =>
              {
                return valor >= 1 && valor <=50560  
              },
              message: "O número fornecido foi {VALUE}. O número de páginas permitido é entre 1 e 50560.",
            },
          ]
      },
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;