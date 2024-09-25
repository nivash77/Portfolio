

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
const Contact=()=>{
  const gitlink="https://github.com/nivash77"
    return(
        <>
       
        <div className="flex flex-col  justify-center items-center h-[80vh] gap-[2rem]">
          <div className="flex flex-row gap-[2rem]">
       <a href={"https://www.linkedin.com/in/nivash-m-2k4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target='_blank'><FontAwesomeIcon icon={faLinkedin}  className="size-16"/></a>
       <a href={"mailto:nivashmareesh07@gmail.com"}><IoMdMail className="size-16"/></a>
        </div>
        <div className="flex flex-row gap-[2rem]">
        <a href={"tel:+91 "}><FaPhone className="size-16" /></a>
       <a href={gitlink} target='_blank'> <FaGithub className="size-16"/></a>
        </div>
        </div>
        </>
    )
}
export {Contact}