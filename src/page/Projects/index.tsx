"use client"

import Card from "@/components/UI/Card";
import { Project } from "@/types/project.interface";
import { useEffect, useState } from "react";
import axios from "axios"
import { projectsJsonBinUrl } from "@/config";
import Image from "next/image";
import styles from "@/page/Projects/styles.module.scss"
import Link from "next/link";

type Projects = Array<Project>

const Projects = () => {
  const [projects, setProjects] = useState<Projects>([])

  useEffect(() => {
    axios.get(projectsJsonBinUrl)
      .then(res => {
        console.log(res)
        setProjects(res.data.record.projects)
      })
  }, [])

  return <div className={`w-full h-screen flex items-center justify-center ${styles.projects}`}>
    <div className={styles.grid}>
      {
        projects.map(el => (
          <Link href={el.github}>
            <Card maxTilt={10} className="bg-gray-500" style={{ width: "fit-content", height: "fit-content", border: "2px solid gray" }}>
              <Image src={el.images[0]} alt={el.name} width={400} height={100} quality={100} />
            </Card>
          </Link>
        ))
      }
    </div>
  </div>
}

export default Projects;