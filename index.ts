import express from "express";
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

import db from "./models";
import { users } from "./seeders/users";
import { projects } from "./seeders/projects";
import { projectassignments } from "./seeders/projectassignments";

const createUsers = () => {
  users.map((user) => {
    db.User.create(user);
  });
};

const createProjects = () => {
  projects.map((project) => {
    db.Project.create(project);
  });
};

const createProjectAssignments = () => {
  projectassignments.map((projectAssignment) => {
    db.ProjectAssignment.create(projectAssignment);
  });
};

// createProjects();
// createUsers();
createProjectAssignments();

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });
});
