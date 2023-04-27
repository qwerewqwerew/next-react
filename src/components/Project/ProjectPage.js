import { useState, useEffect } from 'react'
import { projectPageData } from '../../data';

import Project from "./Project";


const ProductPage = () => {
  const { intro, projectsData } = projectPageData;
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    const cache = [];
    projectsData.map(project => cache.push(project));
    setProjectData(cache);

  }, []);
  return (
    <div>
      {
        intro.map((x, i) => (
          <div key={i}>{x}</div>
        ))
      }

      {projectData.map((project, i) => {
        return <Project image={project.image} projectName={project.name} description={project.description} technologies={project.technologies} githubRepo={project.githubRepo} key={i} />
      })}

    </div>
  )
}
export default ProductPage;