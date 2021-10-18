import Projects from '../Projects';
import Experience from '../Experience';
import Education from '../Education';
import PropTypes from 'prop-types';
import s from './AboutMe.module.css';

function AboutMe({ commandProjects, ownProjects, experience }) {
  return (
    <div className={s.container}>
      {/* <div className={s.section}> */}
        <h2 className={s.profession}>Frontend Developer</h2>
        <h1 className={s.name}>Liudmila Popescu</h1>
        <p className={s.description}>
        I'm looking for a job as a frontend developer in a friendly and thriving company, in order to develop my skills and grow as part of the team. Self-motivated and stress-resistant. Passionate about development and eager to build the best IT solutions. I sincerely believe that my previous experience will be useful for a constant improvement of UI and UX.
        </p>
      <div className={s.section}>
        <h3 className={s.title}>Projects</h3>

       {/* <h4 className={(s.subTitle, s.typeProject)}>Projects</h4> */}
        {/* <ul>
          {ownProjects.map(({ id, label, link, tech, text }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              tech={tech}
              text={text}
            />
          ))}
        </ul> */}
        {/* <h4 className={(s.subTitle, s.typeProject )}>Command projects</h4> */}
        <ul>
          {commandProjects.map(({ id, label, link, tech, text }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              tech={tech}
              text={text}
            />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Work Experience</h3>
        <ul>
          {experience.map(
            ({ id, profession, company, time, country, duties }) => (
              <Experience
                key={id}
                profession={profession}
                company={company}
                time={time}
                country={country}
                duties={duties}
              />
            ),
          )}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Education</h3>
        <Education />
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  commandProjects: PropTypes.arrayOf(PropTypes.object),
  ownProjects: PropTypes.arrayOf(PropTypes.object),
  experience: PropTypes.arrayOf(PropTypes.object),
};

export default AboutMe;