import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './Datatable.scss';
import { Link } from 'react-router-dom';

type Props = {
  columns: GridColDef[];
  rows: { id: number; [key: string]: any }[];
  slug: string;
};

function DataTable({ columns, rows, slug }: Props) {

  const handleDelete = (id: number) => {
    console.log(id + " has been deleted");
  };

  const actionColumns: GridColDef[] = [{
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="/view.svg" alt="View" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="Delete" />
          </div>
        </div>
      );
    }
  }];

  return (
    <div className='dataTable'>
      <DataGrid className='DataGrid'
        rows={rows}
        columns={[...columns, ...actionColumns]}
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
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}

export default DataTable;
