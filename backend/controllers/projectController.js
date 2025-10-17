import { Project } from "../models/Project.js";

export async function listProjects(req, res) {
  const projects = await Project.findAll({ order: [["createdAt", "DESC"]] });
  res.json(projects);
}

export async function createProject(req, res) {
  const { title, description, link, image } = req.body;
  if (!title) return res.status(400).json({ error: "Título é obrigatório" });
  const p = await Project.create({ title, description, link, image });
  res.status(201).json(p);
}
