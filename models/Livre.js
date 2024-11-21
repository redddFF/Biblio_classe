import mongoose, { Schema } from "mongoose";


const LivreSchema = mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  auteur: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: [true, "L'auteur est obligatoire"],
    validate: {
      validator: function (authorId) {
        return authorId != null; 
      },
      message: "Auteur invalide.",
    },
  },

  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
 
});

export default mongoose.model("Livre", LivreSchema);
