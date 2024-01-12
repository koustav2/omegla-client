import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);
  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setJoined(!joined);
        }}
      >
        Join
      </button>
      <Link to="/room">
        <button>Room</button>
      </Link>
    </div>
  );
}

export default Home;
