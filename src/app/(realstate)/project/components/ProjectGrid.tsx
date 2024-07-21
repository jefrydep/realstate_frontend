import React from "react";
import { Project } from "../interface/Project";
import ProjectItem from "./ProjectItem";
interface Props {
  projects: Project[];
}
const ProjectGrid = ({ projects = [] }: Props) => {
  return (
    <div className="flex flex-col  sm:grid  sm:grid-cols-2 lg:grid-cols-3 ">
      {projects.map((data: any, index: number) => (
        <div className="flex justify-center  " key={index}>
          <ProjectItem
            // description={data.description}
            // title={data.nameProject}
            // availableLots={data.availableLots}
            // soldLots={data.soldLots}
            // totalLots={data.totalLots}
            {...data}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
