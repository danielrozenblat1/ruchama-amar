import React from 'react';
import styles from './Me.module.css';
import ruchama from "../../images/רוחמה עמר תדמית.png";

const AboutMe = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.header} id="מי אני">בואי נכיר</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={ruchama} alt="רוחמה עמר" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>רוחמה עמר</h1>
          <div className={styles.subtitle}>"גם אם יש לך ידיים שמאליות את יכולה להיות טובה"</div>
          <p className={styles.description}>
            כשהתחלתי את דרכי בתחום, הייתי בדיוק כמוך - מלאת תקוות וחלומות. אבל במהרה גיליתי שמכרו לי אשליה. הבטיחו שאהיה מאסטרית עם יומן עמוס לקוחות, דחפו לי לקנות המון חומרים מיותרים, ובסוף מצאתי את עצמי מבולבלת ומתוסכלת. אז החלטתי שאני אהיה המדריכה שהייתי רוצה שתהיה לי בהתחלה.
          </p>
          <p className={styles.description}>
            היום, אני מאמינה שהדרך להצלחה עוברת דרך אותנטיות ופשטות. אני לא מאמינה בשמירת מרחק מקצועי מעושה - אצלי תרגישי בבית, חופשייה להיות את עצמך. כי בסופו של דבר, כל אחת יכולה להצליח - צריך רק את ההדרכה הנכונה והאמונה בעצמך.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;