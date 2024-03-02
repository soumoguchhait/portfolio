

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import "./vertical_line.css"
const Vertical=()=>{
    
    return(
        <>
        <div className="vertical-container">
            <div className='vertical-line1'></div>
           <div className='vertical-container-items'><a href="https://www.facebook.com/soumo.guchhait.5"><FontAwesomeIcon icon={faFacebook}/></a></div>
           <div className='vertical-container-items'><a href="https://github.com/soumoguchhait"><FontAwesomeIcon icon={faGithub}/></a></div>
           <div className='vertical-container-items'><a href="https://www.instagram.com/soumo_guchhait/"><FontAwesomeIcon icon={faInstagram}/></a></div>
           <div className='vertical-container-items'><a href="https://www.linkedin.com/in/soumya-guchhait-484b61179/"><FontAwesomeIcon icon={faLinkedin}/></a></div>

            
        </div>
        
       <p className='vertical-text'><a href="mailto:soumoguchhait8587@gmail.com">soumoguchhait8587@gmail.com</a>
     
       </p>
       <div className='vertical-line2'></div>
        </>
    )
};
export default Vertical;