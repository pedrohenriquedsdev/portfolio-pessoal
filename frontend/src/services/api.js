import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001",
  timeout: 5000
});

export async function getProjects() {
  const res = await API.get("/projects");
  return res.data;
}

export async function createContact(payload) {
  const res = await API.post("/contact", payload);
  return res.data;
}

export async function createProject(payload) {
  const res = await API.post("/projects", payload);
  return res.data;
}
