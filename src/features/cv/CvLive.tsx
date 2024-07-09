import DispCvEducation from "./cv_education/DispCvEducation";
import DispCvExperience from "./cv_experience/DispCvExperience";
import DispCvHeader from "./cv_header/DispCvHeader";
import DispCvProjects from "./cv_projects/DispCvProjects";
import DispCvSkills from "./cv_skills/DispCvSkills";
import DispCvSummary from "./cv_summary/DispCvSummary";
import asCvOptionalSection from "./CvOptionalSection";

const OptDispCvSummary = asCvOptionalSection(DispCvSummary);
const CVLive = () => {
  return (
    <div className="divide-y divide-slate-700 mx-2 rounded-lg">
      <DispCvHeader />
      {/* <hr className="px-2" /> */}
      <div className="my-2">
        <DispCvSummary />
      </div>
      <OptDispCvSummary />
      <div className="my-2">
        <DispCvExperience />
      </div>
      <DispCvEducation />
      <DispCvSkills />
      <DispCvProjects />
    </div>
  );
};

export default CVLive;
