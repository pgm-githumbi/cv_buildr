import React from "react";
import CvEditor from "./CvEditor";
import CVLive from "./CvLive";

const CvPanel = () => {
  return (
    <div className="flex flex-col mx-2 h-auto min-h-screen md:flex-row rounded-lg">
      <div className="flex-1 w-full md:w-1/2 md:h-dvh bg-slate-200 rounded-lg ">
        <CvEditor />
      </div>
      <div className="flex-1 w-full min-h-96 md:w-1/2 md:h-auto bg-lime-200 rounded-lg">
        <CVLive />
      </div>
    </div>
  );
};

export default CvPanel;
