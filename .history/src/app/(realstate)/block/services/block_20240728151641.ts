import axios from "axios";
import { string } from "yup";
export interface CreateBlock {
  block: string;
  description?: string;
  projectId: string;
}
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createBlock = async (newBlock: CreateBlock) => {
  const res = await axios.post("http://localhost:3000/api/block/register/", {
    ...newBlock,
  });
  return res;
};
export const updateBlock = async (updateBlock: CreateBlock, id: string) => {
  const res = await axios.patch(`${API_URL}block/${id}`, {
    ...updateBlock,
  });
  return res;
};
// export const updateProject = async (
//   updateProject: CreateProject,
//   id: string
// ) => {
//   const res = await axios.patch(`http://localhost:3000/api/project/${id}`, {
//     ...updateProject,
//   });
//   return res;
// };
