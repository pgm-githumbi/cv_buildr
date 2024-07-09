import React from "react";
import { useAppDispatch } from "../../../hooks";
import { PayloadAction } from "@reduxjs/toolkit";

type Props<E> = {
  children: React.ReactNode;
  entityName: string;
  upsertEntityAction: (key: number) => PayloadAction<number>;
  allEntitiesList: Array<E>;
};

function AddEntityWrap<E extends { id: number }>(props: Props<E>) {
  const { children, entityName, allEntitiesList, upsertEntityAction } = props;
  const dispatch = useAppDispatch();

  let newEntityId = 0;
  allEntitiesList.forEach((entity, index, allEntities) => {
    if (newEntityId <= entity.id) newEntityId = entity.id + 1;
  });
  return (
    <>
      <div className="flex flex-col gap-2">
        {children}
        <div className="h-10">
          <button
            className="btn btn-xs btn-accent"
            onClick={(e) => dispatch(upsertEntityAction(newEntityId))}
          >
            Add {entityName}
          </button>
        </div>
      </div>
    </>
  );
}

export default AddEntityWrap;
