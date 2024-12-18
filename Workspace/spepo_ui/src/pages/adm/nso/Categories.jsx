import React, { useState,  useEffect}  from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import {getAPI} from '../../../services/api';
import Datatable from '../../../components/datatables/Datatables';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

const svClass = "TpyCategoryService";
const svName  = "SVList";

const Categories = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchData = async () => {
      const getList = { "svClass": svClass, "svName": svName };
        try {
          const response = await getAPI(getList);
          const displayColumns = ["id","name","code","dateMod","dateNew"]; 
          
         
          
          setData(response.data);
          const displayedColumnsInfo = displayColumns.map(key => ({ field: key, headerName: key }));
          setColumns(displayedColumnsInfo);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    fetchData();
  }, []); 
  const handleAdd = () =>{
    navigate("/admin/category")
  }
  return (
    <>
       <Button sx={{ width:10, borderColor:'#ffff', marginRight: '1%'}} size="small" onClick={() => handleAdd()} className="btn btn-primary px-1" > <AddToPhotosIcon/></Button> 
   
      <Datatable name ={'Category'} userRows={data} userColumns={columns} />
    </>
  );
}
export default Categories;
