import React from "react";

type Props = {};

const CvProjectTemplate = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="text-xs font-semibold">Heading 1</div>
      <div className="text-xs italic">Heading 2</div>
      <div className="text-xs">
        Content yada blah. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Pariatur, inventore.
      </div>
    </div>
  );
};

export default CvProjectTemplate;
