import  { useState, useEffect } from 'react';

import Navbar from '../src/navbar/navbar';
import Hero from './hero/hero';
import Vertical from './vertical_info/vertical_line';
import About from './about/about';
import Education from './edu/edu';
import Loader from './loader/loader';
import Contact from './contact/contact';
import Skills from './skills/skills';


function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setIsLoading(false);
      clearInterval(loadingInterval);
    }, 1000); // Set loading state to false after 2 seconds

    return () => clearInterval(loadingInterval); // Clean up the interval on component unmount
  }, []);

  const details = {
    name: "SOUMYA GUCHHAIT",
  };

  const HSC = {
    schoolName: "RAISINA BENGALI SR. SEC. SCHOOL",
    schoolDate: "Apr 2011- Apr 2018",
    hscInfo: "I completed my secondary education from Raisina Bengali Senior Secondary School, with a specialization in the science stream. During my time at Raisina, I achieved a CGPA of 65, demonstrating my commitment to academic success. This accomplishment reflects my dedication to my studies and my ability to excel in a challenging academic environment.",
  };

  const Graduation = {
    collegeName: "JAMIA HAMDARD UNIVERSITY", 
    collegeDate: "Aug 2018 - sep-2021",
    graduationInfo: "- During my time at Jamia Hamdard University, I successfully completed a Bachelor of Computer Application degree with a commendable score of 70%. This achievement reflects my dedication and commitment to academic excellence. In addition to my academic pursuits, I was an active member of the National Cadet Corps (NCC), where I contributed to various impactful initiatives. My commitment and hard work were recognized with a grade B for the NCC C certificate, a testament to my ability to balance multiple responsibilities and excel in both academic and extracurricular activities.",
  };

  const FSDC = {
    instituteName: "DICE ACADEMY",
    instituteDate: "Oct 2022 - Oct 2023",
    instituteInfo: "I successfully completed an intensive course in Full Stack Development from Dice Academy, where I honed my skills and gained a comprehensive understanding of web development. Throughout the program, I actively engaged with various programming languages, such as JavaScript, and HTML/CSS, to develop functional and aesthetically appealing websites and applications. This immersive learning experience equipped me with the ability to analyze complex problems, design efficient solutions, and implement them using cutting-edge technologies. By applying my knowledge and leveraging impactful coding techniques, I consistently achieved remarkable results, ensuring seamless functionality and user-friendly experiences. ",
  };

  const mergedData = { ...HSC, ...Graduation, ...FSDC };

  return (
    <>
      {isLoading ? (
      <Loader/>
      ) : (
        <>
          <Navbar />
          <Hero {...details} />
          <About />
         
          <Education {...mergedData} />
          <Skills/>
          <Contact/>
          <Vertical />
        </>
      )}
    </>
  );
}

export default App;