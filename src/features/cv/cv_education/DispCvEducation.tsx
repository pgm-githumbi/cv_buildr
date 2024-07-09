import React from "react";
import CvEducationTemplate from "./CvEducationTemplate";

type Props = {};

const DispCvEducation = (props: Props) => {
  return (
    <div>
      <span className="text-xs">Education</span>
      <CvEducationTemplate />
      <CvEducationTemplate />
      <CvEducationTemplate />
    </div>
  );
};

export default DispCvEducation;
