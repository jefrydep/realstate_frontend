import axios from "axios";
interface CreateProject {
  nameProject: string;
  location: string;
  aream2: string;
  description: string;
  status: string;
}

export const createProject = async (
  newProject: CreateProject,
  token: string
) => {
  const res = await axios.post(
    "http://localhost:3000/api/project/register/",
    {
      ...newProject,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
export const updateProject = async (
  updateProject: CreateProject,
  id: string,
 token:string
) => {
  const res = await axios.patch(
    `http://localhost:3000/api/project/${id}`,
    {
      ...updateProject,
    }
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
