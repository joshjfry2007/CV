
import { useState } from "react";

function Experience() {
  const [info, setInfo] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <h3>Work Experience</h3>

        <input
          name="company"
          placeholder="Company name"
          type="text"
          value={info.company}
          onChange={handleChange}
          required
        />

        <input
          name="position"
          placeholder="Position title"
          type="text"
          value={info.position}
          onChange={handleChange}
          required
        />

        <textarea
          name="responsibilities"
          placeholder="Main responsibilities"
          value={info.responsibilities}
          onChange={handleChange}
          rows={6}
          cols={80}
        />

        <label htmlFor="from">From: </label>
        <input
          id="from"
          name="from"
          type="date"
          value={info.from}
          onChange={handleChange}
          required
        />

        <label htmlFor="until">Until: </label>
        <input
          id="until"
          name="until"
          type="date"
          value={info.until}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <div>
      <h3>{info.company}</h3>
      <p>{info.position}</p>
      <p style={{ whiteSpace: "pre-wrap" }}>
        {info.responsibilities}
      </p>
      <p>
        {info.from} - {info.until || "Present"}
      </p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

export default Experience;
