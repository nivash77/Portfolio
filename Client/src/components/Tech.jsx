import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faJava, faJs } from "@fortawesome/free-brands-svg-icons";
 const Tech=()=>{
    return(
        <>
        <div className=' flex flex-row  justify-center items-start  gap-10'>
        <div > <FontAwesomeIcon icon={faReact} className='size-14' /></div>
        <div><FontAwesomeIcon icon={faGithub}  className='size-14'/></div>
        <FontAwesomeIcon icon={faJava}  className='size-14'/>
        <FontAwesomeIcon icon={faJs} className='size-14' /></div>
        </>
    )
 }
 export {Tech}