import Card from "../UI/Card";
import "./Project.css";
const Project = ({ image, projectName, description, technologies, githubRepo }) => {
  return (
    <Card className="project">
      <img src={image} alt={projectName} />
      <h3>{projectName}</h3>
      <button><a href={githubRepo}>Github</a></button>
      <Card>
        <ul>
          <li>{description}</li>
          <li>{technologies}</li>
        </ul>
      </Card>
    </Card>
  )
}
export default Project;