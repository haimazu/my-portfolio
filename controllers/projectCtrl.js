const Projects = require("../models/projectModel");

const projectCtrl = {
  getProjects: async (req, res) => {
    try {
      const projects = await Projects.find();
      res.json({ projects: projects });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProject: async (req, res) => {
    try {
      const { project_id, image, title, description, github, demo } = req.body;

      const project = await Projects.findOne({ project_id });

      if (project) {
        return res.status(400).json({ msg: "This project is already exists." });
      }

      const newProject = new Projects({
        project_id,
        image,
        title,
        description,
        github,
        demo,
      });

      await newProject.save();
      res.json({ msg: "Project was created." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProject: async (req, res) => {
    try {
      await Projects.findByIdAndDelete(req.params.id);
      res.json({ msg: "Project was deleted." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProject: async (req, res) => {
    try {
      const { image, title, description, github, demo } = req.body;

      await Projects.findOneAndUpdate(
        { _id: req.params.id },
        { image, title, description, github, demo }
      );
      res.json({ msg: "Project was updated." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = projectCtrl;
