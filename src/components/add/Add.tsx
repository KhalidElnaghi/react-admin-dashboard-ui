import React from "react";
import Style from "./add.module.scss";
import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Add(props: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setOpen(false);
  };

  return (
    <div className={Style.add}>
      <div className={Style.modal}>
        <div onClick={() => props.setOpen(false)} className={Style.closeBtn}>
          X
        </div>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className={Style.item}>
                <label htmlFor="">{column.headerName}</label>
                <input type={Style.type} placeholder={column.field} />
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
