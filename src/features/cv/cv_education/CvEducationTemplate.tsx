import React from "react";

type Props = {};

const CvEducationTemplate = (props: Props) => {
  return (
    <div className="flex flex-col my-2 ml-2">
      <div className="text-xs font-semibold">
        Bachelor of Science in Computer Science
      </div>
      <div className="flex flex-row justify-between mx-4">
        <div className="text-xs italic">School</div>
        <div className="text-xs italic">Dates</div>
      </div>
      <div className="text-xs text-left">
        Your school story. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Ipsa, laborum fugiat pariatur hic labore odio exercitationem vitae
        provident similique sunt delectus minus, et beatae ipsam quis obcaecati.
        Temporibus, consectetur beatae.
      </div>
    </div>
  );
};

export default CvEducationTemplate;
