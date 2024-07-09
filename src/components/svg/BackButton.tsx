import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const BackButton: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <>
      <button className={`btn btn-outline btn-xs`} {...rest}>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
        {children}
      </button>
    </>
  );
};

export default BackButton;
