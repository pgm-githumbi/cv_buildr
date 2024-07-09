import CvInputField from "../CvInputField";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  selectExperienceByIdOrDefault,
  upsertExperience,
} from "../../../redux/cv/ExperienceSlice";
import { ReactComponent as Svg } from "../job_icon.svg";
import { ReactComponent as DateSvg } from "../date.svg";

type Props = { id: number };

const TemplateEditExperience = ({ id }: Props) => {
  const experience = useAppSelector((state) =>
    selectExperienceByIdOrDefault(state, id)
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row flex-wrap justify-between">
          <CvInputField
            placeholder="Role"
            labelClass=""
            handleChange={(e) =>
              dispatch(
                upsertExperience({
                  ...experience,
                  id: id,
                  role: e.target.value,
                })
              )
            }
            value={experience?.role || ""}
            svg={<Svg />}
          />
          <CvInputField
            placeholder="Org"
            labelClass=""
            handleChange={(e) =>
              dispatch(
                upsertExperience({
                  ...experience,
                  id: id,
                  org: e.target.value,
                })
              )
            }
            value={experience?.org || ""}
            svg={<Svg />}
          />
        </div>
        <div className="flex flex-row flex-wrap justify-between">
          <CvInputField
            placeholder="From"
            inputType="date"
            handleChange={(e) =>
              dispatch(
                upsertExperience({
                  ...experience,
                  id: id,
                  startDate: e.target.value,
                })
              )
            }
            value={experience?.startDate || ""}
            svg={<DateSvg />}
          />
          <CvInputField
            placeholder="To"
            inputType="date"
            labelClass=""
            handleChange={(e) =>
              dispatch(
                upsertExperience({
                  ...experience,
                  id: id,
                  endDate: e.target.value,
                })
              )
            }
            value={experience?.endDate || ""}
            svg={<DateSvg />}
          />
        </div>

        <label
          htmlFor="experience_summary"
          className="flex justify-center gap-2"
        >
          <textarea
            onChange={(e) => {
              dispatch(
                upsertExperience({
                  ...experience,
                  id: id,
                  text: e.target.value,
                })
              );
            }}
            placeholder="Enter the experience summary"
            value={experience.text}
            id="experience_summary"
            className="mx-2 textarea textarea-bordered textarea-md w-full "
          ></textarea>
        </label>
      </div>
    </>
  );
};

export default TemplateEditExperience;
