import { FaPython , FaJs , FaCss3 , FaHtml5 , FaPhp} from "react-icons/fa";
import { BsFiletypeTxt } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";

const ChosenIcon = ({endPoint}) => {
    switch(endPoint){
        case "py":
            return <FaPython className="text-[24px]"/>
        case "js":
            return <FaJs className="text-[24px]"/>
        case "css":
            return <FaCss3 className="text-[24px]"/>
        case "html":
            return <FaHtml5 className="text-[24px]"/>
        case "php":
            return <FaPhp className="text-[24px]"/>
        case "ts":
            return <SiTypescript className="text-[24px]"/>
        case "txt":
            return <BsFiletypeTxt className="text-[24px]"/>
    }
}
 
export default ChosenIcon;