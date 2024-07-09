import React from "react";
import { useAppSelector } from "../../../hooks";
import { selectSummaryText } from "../../../redux/cv/SummarySlice";

type Props = {};

const DispCvSummary = (props: Props) => {
  const summaryText = useAppSelector(selectSummaryText);
  return <div className="text-xs ">{summaryText}</div>;
};

export default DispCvSummary;
