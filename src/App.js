import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';
import Course from './components/course/Course';
import SecondScreen from './screens/SecondScreen';
import Recommends from './components/recommends/Recommends';
import FirstScreen from './screens/FirstScreen';
import ByMe from './components/ByMe/ByMe';
import Students from './components/recommends/Students';
import AboutMe from './components/me/Me';
import ThirdScreen from './screens/ThirdScreen';
import PrivacyPolicy from './components/privacy/Privacy';

function App() {
  return <>
  {/* <NavBarNew/> */}
  <FirstScreen/>
  <SecondScreen/>

  <AboutMe/>
  <Students/>
  <Recommends/>
<ThirdScreen/>
<PrivacyPolicy 
  ownerName="רוחמה עמר" 
  email="ruchamamar@gmail.com" 
  phone="+972 50-599-9287" 
  domain="https://ruchamamar.co.il/" 
/>
  <ByMe/>
  </>
}

export default App;
