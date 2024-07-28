"use client"
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
import { useParams } from "next/navigation";

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
  const params = useParams()
  const data = await getData();

  return (
    <ContentLayout title="Proyecto">
      <CreateProjectForm />
      <ProjectGrid projects={data} />
    </ContentLayout>
  );
}
