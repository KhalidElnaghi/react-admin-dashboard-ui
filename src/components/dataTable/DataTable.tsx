import { Box } from "@mui/material";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import "./datatable.scss";
import { Link } from "react-router-dom";
type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

export default function DataTable(props: Props) {
  const actionColumns: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="./view.svg" alt="" />
          </Link>
          <div className="delete">
            <img src="./delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };
  return (
    <div className="dataTable">
      <Box sx={{ height: "fit-content", width: "100%" }}>
        <DataGrid
          className="dataGrid"
          rows={props.rows}
          columns={[...props.columns, actionColumns]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      </Box>
    </div>
  );
}
