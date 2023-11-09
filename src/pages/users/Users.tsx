import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import Style from "./users.module.scss";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 70,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  // const { isPending, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () => fetch("http://localhost:8800/api/users").then((res) => res.json()),
  // });
  return (
    <div className={Style.users}>
      <div className={Style.info}>
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>

      {/* {isPending ? (
        "loading..."
      ) : (   )} */}

      <DataTable slug="users" columns={columns} rows={userRows} />

      {open ? <Add slug="user" columns={columns} setOpen={setOpen} /> : null}
    </div>
  );
};

export default Users;
