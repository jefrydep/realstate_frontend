import axios from "axios";
export interface CreateBlock {
  block: string;
  description: string;
}

export const createProject = async (newProject: CreateProject) => {
  const res = await axios.post("http://localhost:3000/api/project/register/", {
    ...newProject,
  });
  return res;
};
export const updateProject = async (
  updateProject: CreateProject,
  id: string
) => {
  const res = await axios.patch(`http://localhost:3000/api/project/${id}`, {
    ...updateProject,
  });
  return res;
};
