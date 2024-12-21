import React, { useEffect } from 'react';
import styles from './Course.module.css';
import { 
  Clock, 
  MapPin, 
  Calendar,
  Fingerprint,
 
  Wrench,


  Hand,
  PenTool,
  Hammer,
  Workflow,
  Focus,
  MousePointer,
  Microscope,
  ClipboardCheck,
  Paintbrush,
  Camera,
  Ruler,
  Share2
} from 'lucide-react';

const Course = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.reveal);
        }
      });
    }, observerOptions);

    const infoBoxes = document.querySelectorAll(`.${styles.infoBox}`);
    const sessions = document.querySelectorAll(`.${styles.session}`);
    const footer = document.querySelector(`.${styles.footer}`);

    infoBoxes.forEach(box => observer.observe(box));
    sessions.forEach(session => observer.observe(session));
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>קורס לק ג'ל למתחילות</h1>
      
      <div className={styles.infoSection}>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>למי מיועד הקורס?</h2>
          <ul className={styles.list}>
            <li>מי שיש לה תשוקה לתחום הציפורניים והיתה רוצה להפוך את התחום למקצוע!</li>
            <li>מי שרוצה להיות עצמאית והאחראית היחידה לקריירה המקצועית שלה</li>
            <li>מי שהתשובה לה להיות הבוס של עצמה</li>
          </ul>
        </div>
      </div>

      <div className={styles.curriculum}>
        <h2 className={styles.curriculumTitle}>תוכנית הלימוד:</h2>
        <div className={styles.sessions}>
          <div className={styles.session}>
            <h3>שיעור ראשון - תאורטי</h3>
            <ul>
              <li>
                <Fingerprint className={styles.topicIcon} size={16} />
                אנטומיה ומבנה הציפורן
              </li>
              <li>
                <Fingerprint className={styles.topicIcon} size={16} />
                מחלות ציפורניים נפוצות
              </li>
              <li>
                <Wrench className={styles.topicIcon} size={16} />
                הכרת כלי העבודה הנכונים
              </li>
              <li>
                <Ruler className={styles.topicIcon} size={16} />
                שלבי עיקור וחיטוי נכונים
              </li>
              <li>
                <Ruler className={styles.topicIcon} size={16} />
                שיוף צורות שונות
              </li>
              <li>
                <Hand className={styles.topicIcon} size={16} />
                עבודה על יד אימון
              </li>
              <li>
                <PenTool className={styles.topicIcon} size={16} />
                הכנה נכונה של הציפורן
              </li>
            </ul>
          </div>

          <div className={styles.session}>
            <h3>שיעור שני - מעשי</h3>
            <ul>
              <li>
                <Hammer className={styles.topicIcon} size={16} />
                הכנה של כלי העבודה וסביבת עבודה
              </li>
              <li>
                <Workflow className={styles.topicIcon} size={16} />
                הכרת כל ראשי השיוף והשימוש בהם
              </li>
              <li>
                <Focus className={styles.topicIcon} size={16} />
                תרגול על יד אימון
              </li>
              <li>
                <MousePointer className={styles.topicIcon} size={16} />
                הדגמה מלאה שלי למניקור על מודליסטית
              </li>
              <li>
                <Microscope className={styles.topicIcon} size={16} />
                תרגול עצמי
              </li>
              <li>
                <Share2 className={styles.topicIcon} size={16} />
                בנייה בטיפס הפוך
              </li>
            </ul>
          </div>

          <div className={styles.session}>
            <h3>שיעור שלישי - מעשי</h3>
            <ul>
              <li>
                <ClipboardCheck className={styles.topicIcon} size={16} />
                יישום הטכניקה לפי כל השלבים שנלמדו:
                שיוף צורה, הכנת הציפורן, הסרת חלק, דחיפת עור נכונה
                מבנה אנטומי, מריחה עמודה וצילום
              </li>
              <li>
                <Paintbrush className={styles.topicIcon} size={16} />
                מריחה צמודה לקוטיקולה צילום העבודה
              </li>
            </ul>
          </div>

          <div className={styles.session}>
            <h3>שיעור רביעי - מעשי</h3>
            <ul>
              <li>
                <ClipboardCheck className={styles.topicIcon} size={16} />
                יישום הטכניקה לפי כל השלבים שלמדנו :מניקור מכשירי, גזירה בצבתית/מספריים, בנייה בג׳ל/מילוי
              </li>
              <li>
                <Camera className={styles.topicIcon} size={16} />
                מבנה אנטומי מריחה צמודה לקוטיקולה צילום העבודה
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
  <h2 className={styles.title}>חשוב לדעת</h2>
  <div className={styles.detailsContainer}>
    <div className={styles.detail}>
      <Clock className={styles.icon} size={20} />
      הקורס מחולק ל-4 מפגשים באורך 4 שעות לימוד
    </div>
    <div className={styles.detail}>
      <MapPin className={styles.icon} size={20} />
      הקורס יתקיים בקרית אתא בסטודיו של רוחמה עמר
    </div>
    <div className={styles.detail}>
      <Calendar className={styles.icon} size={20} />
      מסלולי בוקר / ערב
    </div>
    <div className={styles.detail}>
      <Calendar className={styles.icon} size={20} />
      הקורס כולל ערכה
    </div>
  </div>
</footer>
    </div>
  );
};

export default Course;