import React, { useState,  useEffect}  from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import {getAPI} from '../../../services/api';
import Datatable from '../../../components/datatables/Datatables';
import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { useNavigate } from 'react-router-dom';

const svClass = "AutRoleService";
const svName  = "SVList";

const Roles = ( name, userRows , userColumns ) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
    const getList = { "svClass": svClass, "svName": svName };
      try {
        const response = await getAPI(getList);
        const displayColumns = ["id","name","status","dateMod","dateNew"]; 

        const displayData = response.data.map(item => {
        const displayItem = {};
          displayColumns.forEach(column => {
            if (column === "role") {
              displayItem[column] = item[column] === 1 ? "admin" : "user";
            }else  if (column === "status") {
              displayItem[column] = item[column] === 1 ?  "vô hiệu hóa" : "đang hoạt động" ;
            }
             else {
              displayItem[column] = item[column];
            }
          });
          return displayItem;
        });
        
        setData(displayData);
        const displayedColumnsInfo = displayColumns.map(key => ({ field: key, headerName: key }));
        setColumns(displayedColumnsInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  const handleAdd = () =>{
    navigate("/admin/role")
  }

  return (
    <>
    <Button sx={{ width:10, borderColor:'#ffff', marginRight: '1%'}} size="small" onClick={() => handleAdd()} className="btn btn-primary px-1" > <AddToPhotosIcon/></Button> 
   
      <Datatable name ={'Role'} userRows={data} userColumns={columns} />
    </>
  );
}
export default Roles;
