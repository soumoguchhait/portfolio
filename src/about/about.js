import "./about.css";

const About=(props)=>{
    return(
        <>
        <div id="about" className="about-container">
        <h2>About Me</h2>
        <div className="horizontal-line"></div>
        <p className="about-info">Hello! my name is <span>Soumya Guchhait</span> and I enjoy 
        creating things that live on the internet.
         My interest in web development started back in 2021 and since then i learned a 
         lot about<span> HTML, CSS </span>and<span> Javascript .</span><br></br>
         
         
            
         </p>
         
         <p className="about-info">Knowledgeable, data-driven, and adaptive web developer with 3 years’ coding experience and Bachelor
             of Computer Application(BCA) degree. Collaborative and detail-oriented team player with
              excellent communication skills and ability to work with a team to develop and launch websites.
               Proficient working with Git / GitHub repositories.</p>
              <div className="image-container"></div>
        </div>
       
        </>
    )
};
export default About;