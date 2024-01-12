import "../App.css";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Socket, io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

function Room() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  useEffect(() => {
    console.log(name);
  }, [name]);
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
