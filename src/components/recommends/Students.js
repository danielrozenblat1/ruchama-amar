import React from 'react';
import styles from "./Students.module.css";
import result1 from "../../images/רוחמה עמר תלמידות 1.png";
import result2 from "../../images/רוחמה עמר תלמידות 2.png";
import result3 from "../../images/רוחמה עמר תלמידות 3.png";
import Button from "../button/Button";

const Students = () => {
  const images = [result1, result2, result3];

  return (
    <>
      <div className={styles.title} id="תלמידות">קצת מהבנות שעברו דרכי</div>
      <div className={styles.explain}></div>
      
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* First group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper} itemScope itemType="http://schema.org/Review">
                <img
                  src={img}
                  alt={`רוחמה עמר תלמידה מספר ${index + 1}`}
                  className={styles.image}
                  itemProp="image"
                />
                <meta itemProp="datePublished" content={new Date().toISOString()} />
              </div>
            ))}
          </div>
          {/* Second identical group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper} itemScope itemType="http://schema.org/Review">
                <img
                  src={img}
                  alt={`רוחמה עמר תלמידה מספר ${index + 1}`}
                  className={styles.image}
                  itemProp="image"
                />
                <meta itemProp="datePublished" content={new Date().toISOString()} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Students;