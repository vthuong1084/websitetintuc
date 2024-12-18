import React, { useEffect,useState } from 'react';
import {getAPI, saveFileAPI} from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const Profile = () => {
  const user = localStorage.getItem("username");
  const id = localStorage.getItem("id");
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
    const [data, setData] = useState([]);

 

  useEffect(() => {
    const req_post_list = async () => {
      const api = { svClass: "AutUserService", svName: "SVGet", userDTO :{ "id":id} }
      const response = await getAPI(api);
      setData(response.data);
      setEmail(response.data.email);
      setUsername(response.data.username);
      setPassword(response.data.password);
      setRole(response.data.role);
      setStatus(response.data.status);
      setAvatar(response.data.avatar);
    };
  
    req_post_list();
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
                 localStorage.setItem('avatar',  saveFileResponse.data)
                window.location.reload();

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
            window.location.reload();
        }).catch(getAPIError => {
            console.error("Error calling getAPI: ", getAPIError);
        });

    }
    localStorage.setItem('username',username)
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
    <div className="container" style={{marginTop: "3%"}}>
    <div className="main-body">
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-body"> 
                      <div className="row">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src={avatar} onChange={(e) => setAvatar(avatar)} alt="" className="rounded-circle p-1 bg-primary" width="100"/>
                            <input type='file'
                                onChange={handleFileChange}
                                id='input-file'
                                accept="image/*"
                                className="btn btn-primary"
                                style={{
                                marginTop: '2%',
                                width: '32%',
                                display: 'block',
                              
                                color: '#fff',
                                }}></input>  

                        </div>
                        <hr className="my-4"/>
                        <div className="d-flex flex-column align-items-center text-center">
                        <h4>{username}</h4>
                        </div>
                      </div> 
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card">
                <h5 className="d-flex align-items-center mb-3">Information account</h5>
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
                                <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                                    <div className="col-sm-3">
                                       <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                       <input type="text" className="form-control" value={address}  onChange={(e) => setAddress(e.target.value)}/>
                                   </div>
                                </div>
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
                                        value={sex}
                                        onChange={(e) => setSex(e.target.value)}
                                        style={{ width:'100%' , height: '70%'}}
                                        >
                                        <MenuItem value={1}>Nam</MenuItem>
                                        <MenuItem value={2}>Nữ</MenuItem>
                                    </Select>
                                    </div>
                                </div>
                       
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9 text-secondary">
                                <input type="button" className="btn btn-primary px-2" value="Save Changes"   onClick={handleChange} style={{width: 120}}/>
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

export default Profile