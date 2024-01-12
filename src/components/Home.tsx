import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);
  const navigate = useNavigate();
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
      <button
        onClick={() => {
          navigate(`/room/?name=${name}`);
        }}
      >
        Room
      </button>
    </div>
  );
}

export default Home;
