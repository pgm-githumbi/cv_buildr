import { ReactComponent as UserSvg } from "../username_logo.svg";
import { ReactComponent as JobSvg } from "../job_icon.svg";
import { ReactComponent as PhoneSvg } from "../phone_number.svg";
import { ReactComponent as EmailSvg } from "../email.svg";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  selectEnteredEmail,
  selectEnteredJobTitle,
  selectEnteredName,
  selectEnteredPhone,
  setEmail,
  setJobTitle,
  setName,
  setPhone,
} from "../../../redux/cv/HeaderSlice";
import CvInputField from "../CvInputField";
const CvEditHeader = () => {
  const dispatch = useAppDispatch();
  const phone = useAppSelector(selectEnteredPhone);
  const name = useAppSelector(selectEnteredName);
  const job = useAppSelector(selectEnteredJobTitle);
  const email = useAppSelector(selectEnteredEmail);
  return (
    <>
      <div className="flex flex-col gap-2 mx-2 my-2">
        <div className="flex flex-row flex-wrap gap-2">
          <CvInputField
            placeholder="Full name"
            svg={<UserSvg />}
            value={name}
            handleChange={(e) => dispatch(setName(e.target.value))}
          />
          <CvInputField
            placeholder="Email"
            svg={<EmailSvg />}
            value={email}
            handleChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <CvInputField
            placeholder="Job title"
            svg={<JobSvg />}
            value={job}
            handleChange={(e) => dispatch(setJobTitle(e.target.value))}
          />
          <CvInputField
            placeholder="Phone number"
            svg={<PhoneSvg />}
            value={phone}
            handleChange={(e) => dispatch(setPhone(e.target.value))}
          />
        </div>
      </div>
    </>
  );
};

export default CvEditHeader;
