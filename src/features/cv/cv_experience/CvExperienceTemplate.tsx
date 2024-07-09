import React from "react";
import {
  Experience,
  selectDefaultDisplayExperience,
} from "../../../redux/cv/ExperienceSlice";
import { useAppSelector } from "../../../hooks";

type Props = {
  experience: Experience;
};

const CvExperienceTemplate = ({ experience }: Props) => {
  const defaultExp = useAppSelector(selectDefaultDisplayExperience());
  const role = experience.role.length > 0 ? experience.role : defaultExp.role;
  const org = experience.org.length > 0 ? experience.org : defaultExp.org;
  const startDate =
    experience.startDate.length > 0
      ? experience.startDate
      : defaultExp.startDate;
  const text = experience.text.length > 0 ? experience.text : defaultExp.text;
  return (
    <div className="flex flex-col mt-2">
      <div className="font-bold text-xs">{role}</div>
      <div className="flex flex-row justify-between mx-4">
        <div className="text-xs italic">{org}</div>
        <div className="text-xs italic content-self-end">
          {startDate} - {experience?.endDate || "now"}
        </div>
      </div>
      <div className="text-xs">{text}</div>
    </div>
  );
};

export default CvExperienceTemplate;
