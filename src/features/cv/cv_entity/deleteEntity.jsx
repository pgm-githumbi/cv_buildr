import { useAppDispatch } from "../../../hooks";

const deleteEntity = (EntityTemplateComponent) => {
  const Wrapper = ({
    removeEntityAction,
    entityName = "Experience",
    id,
    ...props
  }) => {
    const dispatch = useAppDispatch();
    return (
      <div className="flex flex-col gap-2">
        <div className="h-10">
          <div className="flex flex-row justify-evenly">
            <div className="justify-self-start m-2">
              <span className="text-sm">
                {entityName} {id}
              </span>
            </div>
            <button
              className="btn btn-xs my-2 btn-warning"
              onClick={(e) => dispatch(removeEntityAction(id))}
            >
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              Delete {entityName}
            </button>
          </div>
        </div>
        <EntityTemplateComponent id={id} {...{ ...props }} />
      </div>
    );
  };
  return Wrapper;
};

export default deleteEntity;
