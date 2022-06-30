const router = require("express").Router();
const projectCtrl = require("../controllers/projectCtrl");

router
  .route("/projects")
  .get(projectCtrl.getProjects)
  .post(projectCtrl.createProject);

router
  .route("/projects/:id")
  .delete(projectCtrl.deleteProject)
  .put(projectCtrl.updateProject);

module.exports = router;
