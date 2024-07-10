import React from "react";
import CvEditor from "./CvEditor";
import CVLive from "./CvLive";

const CvPanel = () => {
  return (
    <div className="flex flex-col mx-2 h-auto min-h-screen md:flex-row rounded-md ">
      <div className="flex-1 w-full md:w-1/2 md:h-dvh rounded-md ">
        <CvEditor />
      </div>
      <div className="flex-1 w-full min-h-96 md:w-1/2 md:h-auto rounded-sm ">
        <CVLive />
      </div>
    </div>
  );
};

export default CvPanel;
