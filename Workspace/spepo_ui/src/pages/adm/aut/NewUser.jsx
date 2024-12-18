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

const svClass = "AutUserService";
const svName = "SVNew";
const userDTO = "userDTO";
const detailsDTO = "detailsDTO";

const NewUser = () => {
    const navigate = useNavigate();
    const [isEnabled, setEnabled] = useState(false); 
    const [showButton, setShowButton] = useState(false); 

    const [role, setRole] = useState('');
    const [status, setStatus] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [avatar, setAvatar] = useState('');
    const [birthday, setBirthday] = useState('');
    const [id, setId] = useState('');
    const [inf01, setInf01] = useState('');
    const [inf02, setInf02] = useState('');

    const [data, setData] = useState([]);
   // const handleCreate = async () => {
    // const getUser = { "svClass": svClass, "svName": svName , userDTO : {"id": id}};
    //       try {
    //         await getAPI(getUser).then(response => {
    //           setId(response.data.id)
    //           setData(response.data);
    //           setEmail(response.data.email);
    //           setUsername(response.data.username);
    //           setPassword(response.data.password);
    //           setRole(response.data.role);
    //           setStatus(response.data.status);
    //           setAvatar(response.data.avatar);
    //           setInf01(response.data.inf01);
    //           setInf02(response.data.inf02);
    //         })
    //       } catch (error) {

    //       }
    //   }

    const handleChange = () =>{
        const apiUser = {"svClass": svClass, "svName": svName, userDTO : { avatar, username, tel, email, status, role, password}};
         getAPI(apiUser).then(response => {
          console.log("user: " + response.data);
          navigate(`/admin/users`);
        });


    }


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
         const avata = URL.createObjectURL(selectedFile);
          setAvatar(avata);
          console.log(avata);
        }
      };

  return (
    <div className="container">
    <div className="main-body">
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src={avatar} onChange={(e) => setAvatar(avatar)} alt="Admin" className="rounded-circle p-1 bg-primary" width="210"/>
                            <div className="mt-3">
                                <h4>{username}</h4>
                                 {/* <input type='file' className="btn btn-primary" /> */}
                                {/*<button className="btn btn-outline-primary">Message</button> */}
                                <input type='file'
                                onChange={handleFileChange}
                                accept="image/*"
                                className="btn btn-primary"
                                style={{
                                width: '36%',
                                display: 'block',
                                backgroundColor: '#4caf50',
                                color: '#fff',
                                }}></input> 
                                
                            </div>
                        </div>
                        <hr className="my-4"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-body">

                    <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" value={username}  onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>

                       <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Role</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                style={{ width:'100%' , height: '70%'}}
                                >
                                <MenuItem value={1}>user</MenuItem>
                                <MenuItem value={2}>admin</MenuItem>
                            </Select>
                           </div>
                        </div>
                        <div className="row mb-3">
                         <div className="col-sm-3">
                                <h6 className="mb-0">Status</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <Select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                style={{ width:'100%' , height: '70%'}}
                                >
                                <MenuItem value={1}>Avalible</MenuItem>
                                <MenuItem value={2}>Unavalible</MenuItem>
                            </Select>
                           </div>
                        </div>
                    
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" value={email}  onChange={(e) => setEmail(e.target.value)}/>
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
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="d-flex align-items-center mb-3">Information Detail</h5>
                               
                                  <div className="row mb-3">
                                      <div className="col-sm-3">
                                         <h6 className="mb-0">Phone</h6>
                                       </div>
                                      <div className="col-sm-9 text-secondary">
                                         <input type="text" className="form-control" value={tel}  onChange={(e) => setTel(e.target.value)}/>
                                      </div>
                                 </div>
                                 <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Birthday</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="date" className="form-control" value={birthday}  onChange={(e) => setBirthday(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Sex</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                         <Select
                                        value={inf01}
                                        onChange={(e) => setInf01(e.target.value)}
                                        style={{ width:'100%' , height: '70%'}}
                                        >
                                        <MenuItem value={1}>Nam</MenuItem>
                                        <MenuItem value={2}>Nữ</MenuItem>
                                    </Select> 
                                    </div>
                                </div>
                                 <div className="row mb-3">
                                    <div className="col-sm-3">
                                       <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                       <input type="text" className="form-control" value={inf02}  onChange={(e) => setInf02(e.target.value)}/>
                                   </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
};
export default NewUser