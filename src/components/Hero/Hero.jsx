import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Oswaldo</h1>
        <p className={styles.description}>
          Soy un apasionado desarrollador de software Full Stack con más de 5 años de experiencia en la creación de API y sistemas backend escalables y eficientes utilizando tecnologías como Java, Go, Python y JavaScript. Experto en diseñar soluciones seguras y de alto rendimiento para aplicaciones web, aprovechando marcos como Spring Boot e integrando herramientas como Docker, AWS y GitHub para un desarrollo e implementación fluidos. 🚀
        </p>
        <a
          href="cv.pdf"
          className={styles.contactBtn}
          download="cv_oswaldo_montano.pdf"
        >
          Descargar CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
