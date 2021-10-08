import s from './Education.module.css';

function Education() {
  return (
    <>
      <p className={s.university}>Moldova State University 
</p>
      <p className={s.education}> Degree in Communication Sciences, speciality Social Journalism</p>
      <span className={s.time}>
        September 2010 - June 2013
        <span className={s.divider}> |</span> Republic of Moldova
      </span>

      <p className={s.university}>GO IT, Ukraine
</p>
      <p className={s.education}> Bootcamp Frontend developer (HTML&CSS/JavaScript/ REACT.JS)</p>
      <span className={s.time}>
      November 2020- June 2021
        <span className={s.divider}> |</span> Ukraine
      </span>
    </>
    
  );
}

export default Education;