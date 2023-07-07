import './App.css';
import Nav_home from './nav_home/nav_home'; 
import Section_2 from './section_2/section_2';
import Section_3 from './section_3/section_3';
import Section_4 from './section_4/section_4';
import Section_5 from './section_5/section_5';
import Section_6 from './section_6/section_6';
import Section_7 from './section_7/section_7';
import Section_8 from './section_8/section_8';
import Section_9 from './section_9/section_9';
import Footer_section from './footer_section/footer_section'
function App() {
  return (
    <div className="App">
      <div><Nav_home/></div>
      <div><Section_2/></div>
      <div><Section_3/></div>
      <div><Section_4/></div>
      <div><Section_5/></div>
      <div><Section_6/></div>
      <div><Section_7/></div>
      <div><Section_8/></div>
      <div><Section_9/></div>
      <div><Footer_section/></div>
    </div>
  );
}

export default App;
