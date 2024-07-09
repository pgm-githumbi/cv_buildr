import React from "react";
import CvProjectTemplate from "./CvProjectTemplate";

type Props = {};

const DispCvProjects = (props: Props) => {
  return (
    <div>
      <span className="text-xs">Projects</span>
      <CvProjectTemplate />
      <CvProjectTemplate />
      <CvProjectTemplate />
      <CvProjectTemplate />
    </div>
  );
};

export default DispCvProjects;
