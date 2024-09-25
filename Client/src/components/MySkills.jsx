import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faJava, faJs } from "@fortawesome/free-brands-svg-icons";
import { faPython } from '@fortawesome/free-brands-svg-icons';
export const MySkills=()=>{
    return(
        <>
       
    <div className="service-card  shadow-md shadow-orange-50 flex flex-col items-start gap-2 ">
    <div className="bg-gradient-to-r w-[300px] flex flex-row from-gray-500 to-gray-400 rounded-lg p-6 shadow-lg text-white gap-4 justify-around items-center">
        <h2 className="text-xl font-semibold mb-2">Java</h2>
        <FontAwesomeIcon icon={faJava}  className='size-10'/>
        
      </div>
            </div>
            <div className="service-card  shadow-md shadow-orange-50 flex flex-col items-start gap-2 ">
    <div className="bg-gradient-to-r w-[300px] from-gray-500 to-gray-400 rounded-lg p-6 shadow-lg text-white">
        <h2 className="text-xl font-semibold mb-2">HTML & CSS</h2>
        
      </div>
            </div>
            <div className="service-card  shadow-md shadow-orange-50 flex flex-col items-start gap-2 ">
            <div className="bg-gradient-to-r w-[300px] flex flex-row from-gray-500 to-gray-400 rounded-lg p-6 shadow-lg text-white gap-4 justify-around items-center">
        <h2 class="text-xl font-semibold mb-2">Python</h2>
        <FontAwesomeIcon icon={faPython} className='size-9' />
        
      </div>
            </div>
            <div className="service-card  shadow-md shadow-orange-50 flex flex-col items-start gap-2 ">
    <div className="bg-gradient-to-r w-[300px] from-gray-500 to-gray-400 rounded-lg p-6 shadow-lg text-white">
        <h2 className="text-xl font-semibold mb-2">DBMS</h2>
        
        
      </div>
            </div>
            <div className="service-card  shadow-md shadow-orange-50 flex flex-col items-start gap-2 ">
            <div className="bg-gradient-to-r w-[300px] flex flex-row from-gray-500 to-gray-400 rounded-lg p-6 shadow-lg text-white gap-4 justify-around items-center">
        <h2 className="text-xl font-semibold mb-2">JavaScrpit</h2>
        <FontAwesomeIcon icon={faJs} className='size-9' />
       
      </div>
            </div>
            <div className="service-card  shadow-md shadow-orange-50 flex flex-col items-start gap-1 ">
    <div className="bg-gradient-to-r w-[300px] flex flex-row from-gray-500 to-gray-400 rounded-lg p-6 shadow-lg text-white gap-4 justify-around items-center">
        <h2 className="text-xl font-semibold mb-2"> React & TailwindCSS</h2>
        <FontAwesomeIcon icon={faReact} className='size-9' />
        
      </div>
            </div>
       
 
        </>
    )
}