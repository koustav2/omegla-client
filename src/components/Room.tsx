import "../App.css";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Socket, io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_SERVER_URL;
function Room() {
  console.log(URL);
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div>Hello</div>
    </>
  );
}

export default Room;
