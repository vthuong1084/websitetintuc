import React, { useState, useEffect }  from 'react';
import { getAPI, saveFileAPI } from '../../../services/api';
import '../../../assets/bootstrap-5.3.1-dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Button from '@mui/material/Button';
import './user.css';

const svClass = "AutUserService";
let svName = "SVGet";
const userDTO = "userDTO";
const detailsDTO = "detailsDTO";

const User = () => {
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
    const [sex, setSex] = useState('');
    const [address, setAddress] = useState('');

    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const getUser = { "svClass": svClass, "svName": svName , userDTO : {"id": id}};
          try {
            const response = await getAPI(getUser);
            console.log(response.data.avatar);
              setData(response.data);
              setEmail(response.data.email);
              setUsername(response.data.username);
              setPassword(response.data.password);
              setRole(response.data.role);
              setStatus(response.data.status);
              setAvatar(response.data.avatar);
              setTel(response.data.tel);
              setBirthday(response.data.birthday);
           
            
          } catch (error) {

          }
        }
        fetchData();
      }, []); 

      const handleChange = () =>{
        console.log("submit");
        const selectedFile = document.getElementById('input-file').files[0];
       
        if (selectedFile) {
        saveFileAPI(selectedFile).then(saveFileResponse => {
             setAvatar(saveFileResponse.data); 
            console.log("path: " + saveFileResponse.data);
            const api = {"svClass": "AutUserService", "svName": "SVMod" , userDTO : {"id": id,"avatar": saveFileResponse.data, username, tel,email, status, role, password}};
            console.log("api: " , api);
            getAPI(api).then(getAPIResponse => {
                console.log("user: ", getAPIResponse.data);
                navigate(`/admin/users`);
            }).catch(getAPIError => {
                console.error("Error calling getAPI: ", getAPIError);
            });
        }).catch(saveFileError => {
            console.error("Error calling saveFileAPI: ", saveFileError);
        });
    } else {
        const api = {"svClass": "AutUserService", "svName": "SVMod" , userDTO : {"id": id,"avatar": avatar, username, tel,email, status, role, password,birthday}};
        console.log("api: " , api);
        getAPI(api).then(getAPIResponse => {
            console.log("user: ", getAPIResponse.data);
            navigate(`/admin/users`);
        }).catch(getAPIError => {
            console.error("Error calling getAPI: ", getAPIError);
        });

    }
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
                                <p className="text-secondary mb-1"></p>
                                <p className="text-muted font-size-sm"></p>
                                 {/* <input type='file'
                                 disabled={!isEnabled}
                                onChange={handleFileChange}
                                id='input-file'
                                accept="image/*"
                                className="btn btn-primary"
                                style={{
                                width: '36%',
                                display: 'block',
                                backgroundColor: '#4caf50',
                                color: '#fff',
                                }}></input>   */}
                                
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
                                <input type="text" className="form-control" value={username} disabled={!isEnabled} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>

                        <div className="row mb-3">
                         <div className="col-sm-3" >
                                <h6 className="mb-0">Status</h6>
                            </div>
                            <div className="col-sm-9 text-secondary" style={{ marginBottom: '-2.5%' }}>
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
                                <input type="text" className="form-control" value={email}  disabled={!isEnabled} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                       
                       
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9 text-secondary">
                                <input type="button" className="btn btn-primary px-2" value="Save Changes" onClick={() => handleChange()} style={{width: 120}}/>
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
                                         <input type="text" className="form-control" value={tel}  disabled={!isEnabled} onChange={(e) => setTel(e.target.value)}/>
                                      </div>
                                 </div>
                                 <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Birthday</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="date" className="form-control" value={birthday}  disabled={!isEnabled} onChange={(e) => setBirthday(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Sex</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary" style={{ marginBottom: '-2.5%' }}>
                                        <Select
                                        disabled={!isEnabled}
                                        value={sex}
                                        onChange={(e) => setSex(e.target.value)}
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
                                       <input type="text" className="form-control" value={address} disabled={!isEnabled} onChange={(e) => setAddress(e.target.value)}/>
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
}
export default User;