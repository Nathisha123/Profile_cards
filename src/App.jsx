// App.jsx
import PropTypes from "prop-types";

const userData = [
  {
    name: "James",
    city: "New York",
    description: "Front-end developer",
    skills: ["UI/UX", "Front End Development", "HTML", "CSS", "Javascript", "React", "Node"],
    online: false,
    profile: "/Images/2.jpg"
  },
  {
    name: "Robert",
    city: "California",
    description: "Back-end developer",
    skills: ["UI/UX", "Back End Development", "HTML", "CSS", "Javascript", "React", "Node"],
    online: false,
    profile: "/Images/4.jpg"
  },
  {
    name: "Lilia",
    city: "Los Angeles",
    description: "UI/UX developer",
    skills: ["UI/UX", "Front End Development", "HTML", "CSS", "Javascript", "React"],
    online: true,
    profile: "/Images/1.jpg"
  },
  {
    name: "Mona",
    city: "San Francisco",
    description: "Front-end developer",
    skills: ["UI/UX", "Front End Development", "HTML", "CSS", "Javascript", "React", "Node"],
    online: false,
    profile: "/Images/3.jpg"
  }
];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
      <img src={props.profile} className="img" alt="user" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired
};



const App = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
};

export default App;
