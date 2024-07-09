import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  selectEnteredSummaryText,
  setSummaryText,
} from "../../../redux/cv/SummarySlice";

const CvEditSummary = () => {
  const summaryText = useAppSelector(selectEnteredSummaryText);
  const dispatch = useAppDispatch();
  return (
    <>
      <textarea
        onChange={(e) => {
          dispatch(setSummaryText(e.target.value));
        }}
        placeholder="Enter your resume summary"
        value={summaryText}
        className="my-4 textarea textarea-bordered textarea-md w-full max-w-xs"
      ></textarea>
    </>
  );
};

export default CvEditSummary;
