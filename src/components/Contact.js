import { styles } from "./Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <h3>Send Me Mail</h3>
      <div className="contact-input">
        <input type="email" placeholder="exemple@gmail.com" />
        <a href="#">Contact</a>
      </div>
    </div>
  );
}
