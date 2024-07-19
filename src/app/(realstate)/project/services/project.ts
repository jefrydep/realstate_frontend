import axios from "axios";
  interface CreateProject {
    nameProject: string;
    location:    string;
    aream2:      string;
    description: string;
    status:      string;
   
}

export const createProject = async (newProject: CreateProject) => {
  const res = await axios.post("http://localhost:3000/api/project/register/", {
    ...newProject,
  });
  return res;
};
