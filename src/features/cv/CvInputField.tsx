import React, { ChangeEventHandler } from "react";

type Props = {
  svg?: React.ReactNode;
  placeholder: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
  inputType?: string;
  inputClass?: string;
  labelClass?: string;
};

const CvInputField = (props: Props) => {
  return (
    <>
      <label
        className={`input input-bordered flex gap-1 items-center mx-2 w-full lg:w-2/5${
          props.labelClass || ""
        }`}
      >
        {props.svg !== undefined && props.svg}
        <span className="text-xs">{props.placeholder}</span>
        <input
          type={props.inputType || "text"}
          className={`shrink ${props.inputClass || ""}`}
          // placeholder={props.placeholder}
          onChange={props.handleChange}
          value={props.value}
        />
      </label>
    </>
  );
};

export default CvInputField;
