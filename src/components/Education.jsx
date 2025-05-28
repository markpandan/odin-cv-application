import "../styles/Education.css";

export default function Education() {
  return (
    <div className="card education-section">
      <h1>Education</h1>
      <hr />
      <div className="education-item">
        <input
          type="text"
          className="input-education-duration-date"
          placeholder="Duration Date"
        />
        <input className="input-course" type="text" placeholder="Course" />
        <input
          className="input-school"
          type="text"
          placeholder="School / University"
        />
      </div>
    </div>
  );
}
