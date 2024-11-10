import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className="footer-bottom">
    <p>&copy; 2024 Oswaldo Montaño | Todos los derechos reservados</p>
  </div>
  </footer>
  
  );
};
