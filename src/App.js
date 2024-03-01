import  { useState, useEffect } from 'react';

import Navbar from '../src/navbar/navbar';
import Hero from './hero/hero';
import Vertical from './vertical_info/vertical_line';
import About from './about/about';
import Education from './edu/edu';
import Loader from './loader/loader';
import Contact from './contact/contact';


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
    hscInfo: "Completed secondary education from Raisina Bengali Senior Secondary School, specializing in the science stream, achieving a CGPA of 65",
  };

  const Graduation = {
    collegeName: "JAMIA HANDARRD UNIVERSITY",
    collegeDate: "Aug 2018 - sep-2021",
    graduationInfo: "- Achieved a Bachelor of Computer Application degree from Jamia Hamdard University with an impressive score of 70%, showcasing dedication and excellence.Engaged in the National Cadet Corps (NCC), actively contributing to a multitude of impactful initiatives. Demonstrated commitment and received a commendable grade B for the NCC C certificate.",
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
          <Contact/>
          <Vertical />
        </>
      )}
    </>
  );
}

export default App;