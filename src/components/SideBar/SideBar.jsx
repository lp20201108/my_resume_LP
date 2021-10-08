import Contacts from '../Contacts';
import TechSkills from '../TechSkills';
import SoftSkills from '../SoftSkills';
import Languages from '../Languages';
import PropTypes from 'prop-types';
import s from './SideBar.module.css';
import myPhoto from '../../images/LP.jpg';

function SideBar({ contacts, techSkills, softSkills, languages }) {
  return (
    <aside className={s.sidebar}>
      <img src={myPhoto} alt="Liudmila Popescu profile photo" className={s.photo} />
      <div className={s.section}>
        <h3 className={s.title}>Contacts</h3>
        <ul>
          {contacts.map(({ id, label, link, text }) => (
            <Contacts
              key={id}
              label={label}
              link={link}
              text={text}
          
            />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Tech Skills</h3>
        <ul>
          {techSkills.map(({ id, label }) => (
            <TechSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Soft Skills</h3>
        <ul>
          {softSkills.map(({ id, label }) => (
            <SoftSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Languages</h3>
        <ul>
          {languages.map(({ id, label }) => (
            <Languages key={id} label={label} />
          ))}
        </ul>
      </div>
    </aside>
  );
}

SideBar.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  techSkills: PropTypes.arrayOf(PropTypes.object),
  softSkills: PropTypes.arrayOf(PropTypes.object),
  Languages: PropTypes.arrayOf(PropTypes.object),
};

export default SideBar;