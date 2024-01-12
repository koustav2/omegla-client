import "../App.css";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Socket, io } from "socket.io-client";

const URL = process.env.REACT_APP_SERVER_URL;
function Room() {
  console.log(URL);
  return (
    <>
      <div>Hello</div>
    </>
  );
}

export default Room;
