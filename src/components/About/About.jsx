import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      {/* <h2 className={styles.title}>Sobre mí</h2> */}
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} className={styles.aboutIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador Full Stack</h3>
              <p>
                Soy un Desarrollador Full Stack con más de 5 años de experiencia en la creación de sistemas backend escalables, seguros y de alto rendimiento utilizando tecnologías como Java, Go y Python. Me especializo en el desarrollo de APIs robustas, la integración con servicios en la nube como AWS y la implementación de pipelines de CI/CD para despliegues optimizados.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")}  className={styles.aboutIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador Backend</h3>
              <p>
                Tengo experiencia en el desarrollo de sistemas backend rápidos y optimizados, así como en la creación de APIs seguras y escalables, utilizando tecnologías como Java, Go y Python.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem} >
            <img src={getImageUrl("about/devopsIcon.png")}  className={styles.aboutIcon} alt="Devops icon" />
            <div className={styles.aboutItemText}>
            <h3>DevOps</h3>
            <p>
              He implementado soluciones DevOps avanzadas, automatizando procesos con herramientas como Docker y Kubernetes, y gestionando pipelines de CI/CD utilizando GitHub Actions, Jenkins y GitLab. Esto ha optimizado el despliegue y la integración continua en proyectos de gran escala.
            </p>

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
