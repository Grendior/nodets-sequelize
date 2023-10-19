import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

import db from "./models";

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
const server = http.createServer(app);

db.sequelize.sync().then(() => {
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  });
});

// import { users } from "./seeders/users";
// import { projects } from "./seeders/projects";
// import { projectassignments } from "./seeders/projectassignments";

// const createUsers = () => {
//   users.map((user) => {
//     db.User.create(user);
//   });
// };

// const createProjects = () => {
//   projects.map((project) => {
//     db.Project.create(project);
//   });
// };

// const createProjectAssignments = () => {
//   projectassignments.map((projectAssignment) => {
//     db.ProjectAssignment.create(projectAssignment);
//   });
// };

// createProjects();
// createUsers();
// createProjectAssignments();
