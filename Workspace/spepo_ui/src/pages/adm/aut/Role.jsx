import React, { useState, useEffect }  from 'react';
import {getAPI} from '../../../services/api';
import ViewDetails from '../../../components/form/ViewDetails';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import DeleteIcon from '@mui/icons-material/Delete';
import ConstructionIcon from '@mui/icons-material/Construction';
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import '../../../assets/bootstrap-5.3.1-dist/css/bootstrap.min.css';

const svClass = "AutRoleService";
const svName = "SVGet";

const Role = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isEnabled, setEnabled] = useState(false); 
    const [showButton, setShowButton] = useState(false); 
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchData = async () => {
        const getUser = { "svClass": svClass, "svName": svName , roleDTO : {"id": id}};
          try {
            const response = await getAPI(getUser);
            console.log(response.data)
              setName(response.data.name);
              setStatus(response.data.status);
              
            
          } catch (error) {

          }
        }
        fetchData();
      }, []); 

    const handleChange = () =>{
        const apiUser = {"svClass": svClass, "svName": "SVMod", roleDTO : {name,status}};
         getAPI(apiUser).then(response => {
          console.log("user: " + response.data);
          navigate(`/admin/roles`);
        });
    }

  return (
    <div className="container">
    <div className="main-body">
        <div className="row">
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-body">
                    <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" value={name}  onChange={(e) => setName(e.target.value)}/>
                            </div>
                            </div>
                            <div className="row mb-3" style={{ marginTop:'3%'}}>
                            <div className="col-sm-3">
                                <h6 className="mb-0">Status</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                style={{ width:'100%' , height: '70%'}}
                                >
                                <MenuItem value={1}>Đang hoạt động</MenuItem>
                                <MenuItem value={2}>Vô hiệu hóa</MenuItem>
                            </Select>
                           </div>
                        </div>
                        
                            
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="button" className="btn btn-primary px-2" value="Save"  style={{width: 60}}  onChange={(e) => handleChange()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

  )
};
export default Role