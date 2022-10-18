import React from "react";
import NavBar from "../components/NavBar";
import { WithRouter } from "utils/Navigation";

function Home() {
  return (
    <>
      <NavBar />
      <div className="p-5 font-blue">index</div>
    </>
  );
}

export default WithRouter(Home);
