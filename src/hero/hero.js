
import "./hero.css";
const Hero=(props)=>{
    return(
        <>
        <div className="hero-container">
            <span className='inner-text'>Hi, my name is</span>
            <h1>{props.name}.</h1>
            <h2>I Build Things For The  Web.</h2>
        
            <p className="hero-subtitle">I’m a Front End Developer specializing in building (and occasionally designing)
            seeking to use technical proficiency and creativity to develop engaging user experiences
             exceptional digital <span>experiences</span>. </p>
            <a href="https://www.diceacademy.in/students/Soumya/index.html#services"> <button>Check  out My Work</button></a>
        </div>
        </>
    )
};
export default Hero;