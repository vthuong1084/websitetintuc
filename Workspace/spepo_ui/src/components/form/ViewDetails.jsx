import * as React from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {getAPI} from "../../services/api";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';


let svName;

const ViewDetails = ({ data = [], svClass, objDTO}) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [isEnabled, setEnabled] = useState(false); 
  const [showButton, setShowButton] = useState(false); 
  const [showRole, setRole] = useState(true); 

  let id;
  if (data) {
    const displayItem = {};
    Object.entries(data).forEach(([key, value]) => {
      if (key === "status" && value === 0) {
        displayItem[key] = "vô hiệu hóa";
      } else if (key === "role" && value === 1) {
        displayItem[key] = "admin";
      } else if (key === "id" ) {
        id = value;
      }
       else {
        displayItem[key] = value;
      }
     
    });
  } 
  let getUser;
  if(svClass === "AutUserService"){
     getUser = { "svClass": svClass, "svName": svName , "userDTO" : {"id": id}};
  }else if(svClass === "AutRoleService"){
     getUser = { "svClass": svClass, "svName": svName , "roleDTO" : {"id": id}};
  }else if(svClass === "TpyCategoryService"){
     getUser = { "svClass": svClass, "svName": svName , "DTO" : {"id": id}};
  }else if(svClass === "NsoPostService"){
     getUser = { "svClass": svClass, "svName": svName , "userDTO" : {"id": id}};
  }

  
  const handleDelete = () => {
    svName = "SVDel";
   

    getAPI(getUser).then(response => {
      console.log(response.data)
      navigate(`/admin/users`);
    })
   }

   const handleChange = (fieldName,key) => (event) => {
    const newValue = event.target.value;
      setFormData((prevData) => ({
        ...prevData,
        [key]: newValue,
      }));
    
  };

  const handleEdit = () => {
    setEnabled(true);
    setShowButton(true);
    setRole(false);
  }
  const handleValidate = () => {
    svName = "SVMod";
    console.log(formData)
    const getValidate = { "svClass": svClass, "svName": svName , objDTO : {"id": id,...formData}};
    console.log(getValidate)
    getAPI(getValidate).then(response => {
      console.log(response.data)
      navigate(`/admin/users`);
    })
  }
  const [anh, setAnh] = useState();
  const upload = () => {
    <div>
      <img src={URL.createObjectURL(anh)} width="200px"/>
    </div>
  }
  const fileUp = (e) => {
    setAnh(e.target.files)
  }

  const generateTextField = (key, value, index) => {
    if (key === "password") {
      return (
        <TextField
          key={index}
          required
          disabled={!isEnabled} 
          id={`outlined-password-input`}
          label="Password"
          type="password"
          autoComplete="current-password"
          defaultValue={value}
          sx={{ width: '500px' }}
        />
      );
    } else if (key === "email") {
      return (
        <TextField
          key={index}
          required
          disabled={!isEnabled} 
          id={`outlined-email-input`}
          label="Email"
          type="email"
          defaultValue={value}
          sx={{ width: '500px' }}
          
        />
      );
    } else if (key === "role" && showRole === true) {
      return (
        <TextField
          key={index}
          disabled={!isEnabled} 
          hidden={!showRole} 
          id={`outlined-email-input`}
          label="role"
          type="text"
          defaultValue={value}
          sx={{ width: '500px' }}
          
        />
      );
    }
    // else if (key === "role" && showRole === false) {
    //   return (
    //     <FormControl fullWidth>
    //         <InputLabel id="demo-simple-select-label">${keyƯ</InputLabel>
    //         <Select
    //           labelId="demo-simple-select-label"
    //           id="demo-simple-select"
    //           value={age}
    //           label="Age"
    //           onChange={handleChange}
    //         >
    //           <MenuItem value={10}>Ten</MenuItem>
    //           <MenuItem value={20}>Twenty</MenuItem>
    //           <MenuItem value={30}>Thirty</MenuItem>
    //         </Select>
    //   </FormControl>
    //   );
  //  } 
    
    else if (key === "id") {
      return (
        <TextField
          key={index}
          required
          disabled
          id={`outlined-id-input`}
          label="id"
          type=""
          defaultValue={value}
          sx={{ width: '500px' }}
          
        />
      );
    }else if (key === "ids") {
      return (
        <TextField
          key={index}
          hidden
          id={`outlined-ids-input`}
          label=""
          type=""
          autoComplete=""
          defaultValue={value}
          sx={{ width: '500px' }}
        />
      );
    }else if (key === "avatar") {
      return (
        <>
        <Input
            key={index}
            onChange={fileUp}
            id={`outlined-avatar-input`}
            label=""
            type="file"
            autoComplete=""
            accept="image/*"
            defaultValue={value}
            sx={{ width: '500px' }}
        />
        {upload()}
        </>
      );

    } else {
      return (
        <TextField
          key={index}
          disabled={!isEnabled} 
          required
          id={`outlined-required-${index}`}
          label={`${key}`}
          defaultValue={value}
          sx={{ width: '500px' }}
          onChange={handleChange(value,key)}
          
        />
      );
    }
  };
  
  const textFields = Object.entries(data).map(([key, value], index) => (
    generateTextField(key, value, index)
  ));
  


    return (
        <Box display="flex" 
      component="form"
       sx={{
        '& .MuiTextField-root': { m: 1, width: '500px' },
        '& .MuiTextField-root.Button': { width: '10%', marginBottom: '8px' },
        '@media (max-width: 600px)': {
          flexDirection: 'column',
          '& .MuiTextField-root': { width: '100%', marginBottom: '8px' },
          '& div': { textAlign: 'center' },
        },
      }}
      noValidate
      autoComplete="off"
    >
    
      <div>
      <Avatar
        alt="Remy Sharp"
        src={"https://i.pinimg.com/236x/56/1b/64/561b6478c1352784e0cd4c7030e416b4.jpg"}
        sx={{ width: 156, height: 156,  marginRight: 10 , marginLeft: 20}}
        />
     </div>
    
      <div>
      {textFields}
      </div> 
      <div>
          <Button onClick={handleEdit}>
              <ConstructionIcon />
          </Button> 
          <Button onClick={handleDelete}>
              <DeleteIcon  />
          </Button> 
          <Button onClick={handleValidate}>
             {showButton && <SaveAsIcon />}
        </Button>
      </div>
     
    </Box>
    );
};

export default ViewDetails;

