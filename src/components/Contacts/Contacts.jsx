import s from './Contacts.module.css';
import {FaTelegramPlane, FaLinkedinIn, FaPhoneAlt, FaGithub} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';




function Contacts  ({ label, link, text }) {

  const Icon =()=>{
    switch(label) {
      case 'Phone':
        return <FaPhoneAlt/>
        case 'E-mail':
        return <AiOutlineMail/>;
        case 'GitHub':
        return <FaGithub/>;
        case 'Telegram':
        return <FaTelegramPlane/>;
        case 'LinkedIn':
          return <FaLinkedinIn/>;
      default:
        return <FaPhoneAlt/>;
    }
  }
  

  return (
    <li className={s.contact}>
  
     <a className={s.link} href={link}>
     <span width="25" className={s.icon}> {Icon()}</span>
    {/* <img src={Icon()} alt={label} width="25" className={s.icon} /> */}
        {text}
      </a>
    </li>
  );
};

export default Contacts;