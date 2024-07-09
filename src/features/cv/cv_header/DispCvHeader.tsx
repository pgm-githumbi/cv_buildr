import React from "react";
import { useAppSelector } from "../../../hooks";
import {
  selectEmail,
  selectJobTitle,
  selectName,
  selectPhone,
} from "../../../redux/cv/HeaderSlice";

type Props = {};

const DispCvHeader = (props: Props) => {
  const fullName = useAppSelector(selectName);
  const jobTitle = useAppSelector(selectJobTitle);
  const email = useAppSelector(selectEmail);
  const phone = useAppSelector(selectPhone);
  return (
    <>
      <div className="flex flex-row gap-4">
        <div className="basis-1/6">
          <div className="avatar online placeholder mt-2">
            <div className="bg-neutral text-neutral-content w-14 rounded-full">
              <span className="text-xl">{fullName[0]}</span>
            </div>
          </div>
        </div>
        <div className="basis-4/6">
          <div className="flex flex-col">
            <div className="text-2xl font-bold">{fullName}</div>
            <div className="text-base font-medium">{jobTitle}</div>
          </div>
        </div>
        <div className="basis-2/6">
          <div className="flex flex-col gap-1 mt-2 justify-end">
            <div className="text-xs">{email}</div>
            <div className="text-xs">{phone}</div>
            <div className="text-xs">github</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DispCvHeader;
