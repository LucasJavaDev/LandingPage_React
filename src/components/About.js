import { styles } from "./About.css";

export default function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex eum
          quibusdam repudiandae dolorem alias exercitationem placeat. Omnis sunt
          facere quae velit! Architecto provident vel officia ea sapiente ab,
          tempore doloribus.
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}
