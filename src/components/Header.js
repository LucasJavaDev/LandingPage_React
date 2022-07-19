import Navbar from "./Navbar";
import { styles } from "./Header.css";

export default function Header() {
  return (
    <header id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Launch Your App</span> With Confidence And Creativity
        </h1>
        <p className="details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolores
          incidunt eaque perferendis dicta nobis accusantium deserunt assumenda
          omnis, exercitationem harum ullam voluptatum quod aliquam vel
          accusamus tempore dolore ipsum!
        </p>
        <a href="#" className="cv-btn">
          Download
        </a>
      </div>
    </header>
  );
}
