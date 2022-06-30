const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    project_id: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    image: {
      type: Object,
      require: true,
      default: {
        public_id: "portfolio/projects/apqu0macxedngtbkbvke",
        url: "https://res.cloudinary.com/dzmau9ijh/image/upload/v1656517557/portfolio/projects/apqu0macxedngtbkbvke.png"
      }
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    github: {
      type: String,
      default: "",
    },
    demo: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Projects", projectSchema);
