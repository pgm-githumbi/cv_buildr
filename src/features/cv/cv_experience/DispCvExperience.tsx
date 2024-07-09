import React from "react";
import CvExperienceTemplate from "./CvExperienceTemplate";
import { useAppSelector } from "../../../hooks";
import {
  selectAllExperiences,
  selectDefaultDisplayExperience,
} from "../../../redux/cv/ExperienceSlice";

type Props = {};

const DispCvExperience = (props: Props) => {
  const allExp = useAppSelector(selectAllExperiences);
  const defaultExp = useAppSelector(selectDefaultDisplayExperience());
  return (
    <div className="flex flex-col">
      <div className="text-xs">Work Experience</div>
      <div>
        {allExp.map((exp, i) => (
          <CvExperienceTemplate experience={exp} key={i} />
        ))}

        {allExp.length === 0 && (
          <CvExperienceTemplate experience={defaultExp} />
        )}
      </div>
    </div>
  );
};

export default DispCvExperience;
