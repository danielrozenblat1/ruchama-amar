import IconTextComponent from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import money from "../Icons/wired-lineal-414-money-bag-dollar-hover-shake (2).json"
import NewBox from "../components/NewBox/NewBox"
import nail from "../Icons/wired-outline-1592-nail-polish-hover-pinch (1).json"
import manicure from "../Icons/wired-outline-1594-manicure-hover-pinch (2).json"
import nails from "../Icons/wired-outline-1596-nails-hover-pinch.json"
import social from "../Icons/wired-lineal-962-social-media-marketing-hover-pinch.json"
import certificate from "../Icons/wired-lineal-1483-parchment-hover-pinch.json"
import help from "../Icons/wired-lineal-1029-service-hover-pinch.json"
import book from "../Icons/wired-lineal-112-book-morph-open.json"
import Button from "../components/button/Button"
import { ChevronDown } from "lucide-react"
import Course from "../components/course/Course"
import IconBox from "../components/littleBox/LittleBox"
const SecondScreen=()=>{


    return <>
    <div className={styles.title}>לא הגעת לכאן סתם!</div>
    <div className={styles.description}>את כאן כי יש לך תשוקה לתחום הציפורניים ואת רוצה לקחת אותה צעד אחד קדימה</div>
    <div className={styles.title}>ולהגיע למצב שאת</div>
    <div className={styles.row}>
<IconTextComponent text="קמה כל בוקר בתחושה שאת מגשימה את עצמך" icon={nail}/>
<IconTextComponent text="שולטת בעצמך על הלו''ז שלך" icon={manicure}/>
<IconTextComponent text="מרוויחה סכומים שתמיד חלמת להרוויח" icon={nails}/>
    </div>
    <div className={styles.title}>אבללל</div>
    <div className={styles.description}>להקים עסק מצליח בתחום הציפורניים לא קורה בלילה אחד..</div>
    <div className={styles.title}>זה ידרוש ממך</div>
    <div className={styles.row}>
<NewBox icon={nail} title="התמדה" description="הצלחה דורשת להגיע כל יום מחדש ולתת מעצמך 100%, גם כשקשה וגם כשנראה שאין התקדמות"/>
<NewBox icon={nails} title="תחזוק" description=" תחום הביוטי כל הזמן מתעדכן, חשוב ללמוד טרנדים חדשים,טכניקות שונות וחדשות ולתחזק את הציוד שלך"/>
<NewBox icon={manicure} title="תרגול" description="זו משוואה פשוטה - תרגול שווה בטחון! ככל שתתרגלי יותר, תהי יותר בטוחה בכשרון שלך ויותר מנוסה בתחום"/>

    </div>
    <div className={styles.title}>לפני 10 שנים</div>
    <div className={styles.description}>הייתי בדיוק במקום שלך! רציתי לקחת את האהבה שלי צעד אחד קדימה וכשעשיתי את הצעד והתחלתי ללמוד את התחום גיליתי שחסרים לי הרבה דברים חשובים בדרך</div>
    <div className={styles.title}>וזה הוביל אותי לפתוח את </div>
    <div className={styles.arrowContainer}>
          <ChevronDown size={32} className={styles.bounceArrow} strokeWidth={1}/>
        </div>
   <Course/>
   <div className={styles.title}>והכי חשוב</div>
   <div className={styles.description}>בסיום הקורס תצאי ממני עם</div>
   <div className={styles.row}>
   <IconBox 
          icon={book} 
          text="חוברת עם כל התוכן התאורטי שתעזור לך בהמשך"
        />
        <IconBox 
          icon={social} 
          text="רעיונות לפוסטים וסרטונים שישמשו אותך לשיווק העסק"
        />
        <IconBox 
          icon={certificate} 
          text="תעודה מקצועית"
        />
        <IconBox 
          icon={help} 
          text="ליווי למשך 3 חודשים בסיום הקורס"
        />

   </div>
  <Button text="רוחמה, בואי נדבר!"/>
    </>
}
export default SecondScreen