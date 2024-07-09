import TemplateEditExperience from "./TemplateEditExperience";
import deleteEntity from "../cv_entity/deleteEntity";
import {
  Experience,
  removeExperience,
  selectAllExperiences,
  upsertDefaultEditExperience,
} from "../../../redux/cv/ExperienceSlice";
import { useAppSelector } from "../../../hooks";
import AddEntityWrap from "../cv_entity/AddEntityWrap";

type Props = {};

const DeletableTemplate = deleteEntity(TemplateEditExperience);
//-----------------------------------------------------------------------
function CvEditExperience(props: Props) {
  const allExp = useAppSelector(selectAllExperiences);
  console.log("all Entities", allExp);

  return (
    <>
      <AddEntityWrap<Experience>
        entityName="Experience"
        upsertEntityAction={upsertDefaultEditExperience}
        allEntitiesList={allExp}
      >
        <>
          {allExp.map((entity, i) => (
            <>
              <DeletableTemplate
                key={i}
                removeEntityAction={removeExperience}
                id={entity.id}
              />
            </>
          ))}
        </>
      </AddEntityWrap>
    </>
  );
}

export default CvEditExperience;
