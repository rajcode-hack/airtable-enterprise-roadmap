const BASE = "http://localhost:4000/api";

export const getWorkspaces = () =>
  fetch(`${BASE}/workspaces`).then(r => r.json());

export const getPrograms = () =>
  fetch(`${BASE}/programs`).then(r => r.json());

export const getMembers = () =>
  fetch(`${BASE}/members`).then(r => r.json());
