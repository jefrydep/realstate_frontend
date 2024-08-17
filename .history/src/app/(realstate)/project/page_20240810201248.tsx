import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreateProjectForm from "./components/CreateProjectForm";
import ProjectGrid from "./components/ProjectGrid";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { getServerSession } from "next-auth";

async function getData() {
  const res = await fetch("http://localhost:3000/api/project/findAll", {
    cache: "no-cache",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function ProjectPage() {
  const data = await getData();
  const dataUser = getServerSession();
  console.log(dataUser);

  return (
    <ContentLayout>
      <CreateProjectForm />
      <ProjectGrid projects={data} />
    </ContentLayout>
  );
}
