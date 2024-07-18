import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../Components/dataTable/DataTable'
import './User.scss'
import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../Components/add/Add';

const columns: GridColDef<(typeof userRows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: 'avatar', headerName: 'Avatar', width: 100,
      renderCell: (params)=>{
          return <img src={params.row.img || "noavatar.png"} alt="" />
      }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },

  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    type: 'number',
    width: 110,
    editable: true,
  },
 
  {
      field: 'varified', headerName: 'Varified', width:100, type:'boolean'
  },
 
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, status:true },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, status:false },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, status:true },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, status:false },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, status:true },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status:true },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status:false },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status:false },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status:true },
];

function User() {
  const [open, setOpen] = useState(false)
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=> setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows}/>
      {open && <Add slug='user' columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default User