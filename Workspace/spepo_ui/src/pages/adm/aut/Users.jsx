import React, { useState,  useEffect}  from 'react';
import {getAPI} from '../../../services/api';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import '../../../assets/bootstrap-5.3.1-dist/css/bootstrap.min.css';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const svClass = "AutUserService";
let svName  = "SVList";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Users = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [filteredData1, setFilteredData1] = useState([]);
  const [filteredData2, setFilteredData2] = useState([]);
  const [value, setValue] = React.useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData1.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData1.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  pageNumbers.map(number => (
    <button key={number} onClick={() => setCurrentPage(number)}>
      {number}
    </button>
  ));
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  useEffect(() => {
    const fetchData = async () => {
    const getList = { "svClass": svClass, "svName": svName };
      try {
        const response = await getAPI(getList);
        const UserData = response.data.filter(user => user.role === 1);
        const adminData = response.data.filter(user => user.role === 2);
       
        setData(response.data);
        console.log(response.data);
      
        setFilteredData(response.data);
        setFilteredData1(UserData);
        setFilteredData2(adminData);
      

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleDelete = (userId) => {
    svName = "SVDel";
    const getUser = { "svClass": svClass, "svName": svName, "userDTO": { "id": userId } };
    getAPI(getUser)
      .then(response => {
        const updatedData = data.filter(user => user.id !== userId);
        setData(updatedData);
        console.log(updatedData);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

   const handleView = (userId) => {
    navigate(`/admin/user/${userId}`);
   };
 

   const handleAdd = () => {
    navigate(`/admin/new-user`);
   };
   const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const filteredUsers = data.filter((user) => {
      const username = user.username ? user.username.toLowerCase() : ''; 
      const email = user.email ? user.email.toLowerCase() : ''; 
      return (
        username.includes(searchTerm.toLowerCase()) ||
        email.includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filteredUsers);

    const isUser = filteredUsers.some((user) => user.role === 1);
    const isAdmin = filteredUsers.some((user) => user.role === 2);

    if (isUser) {
      setValue(0);
      setFilteredData1(filteredUsers.filter((user) => user.role === 1));
      setFilteredData2([]);
    } else if (isAdmin) {
      setValue(1);
      setFilteredData2(filteredUsers.filter((user) => user.role === 2));
      setFilteredData1([]);
    } else {
      setValue(0);
      setFilteredData1([]);
      setFilteredData2([]);
    }
  };

  return (
    <>
     <Box sx={{ width: '100%' }}>
     {/* <Button sx={{ width:10, borderColor:'#ffff', marginRight: '1%'}} size="small" onClick={() => handleAdd()} className="btn btn-primary px-1" > <PersonAddAlt1Icon /></Button>  */}

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="User" {...a11yProps(0)} />
         
          <div className="col-lg-6"  style={{marginLeft: '50%'}}>
            <div className="d-flex align-items-center" >
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by name or email"
                style={{
                  marginRight: '2%',
                  height: '35px',
                  width: '47%',
                  borderRadius: '8px',
                  borderColor: 'black'
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
              <button onClick={handleSearch}  style={{  borderRadius: '8px',height: '35px',width:'20%'}}>Search</button>
            </div> 
          </div>
    
        </Tabs>
        
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className="row">
      {currentItems.map((user, index) => (
        <div className="col-lg-3" key={index}>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src={user.avatar} alt="img" className="rounded-circle p-1 bg-primary" width="180" height="150" />
                <div className="mt-3">
                  <h4>{user.username}</h4>
                  <p className="text-secondary mb-1">Email: {user.email}</p>
                </div>
              </div>
              <CardActions>
                <Button size="small" onClick={() => handleView(user.id)}>View</Button>
                <Button size="small" onClick={() => handleDelete(user.id)}>Delete</Button>
              </CardActions>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            style={{
              padding: '8px 12px',
              margin: '0 5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              background: 'transparent',
              cursor: 'pointer',
              color: '#333',
              fontWeight: 'bold',
              outline: 'none',
              transition: 'background 0.3s ease',
            }}
          >
            {number}
          </button>
        ))}
      </div>

      </CustomTabPanel>
      </Box>
    </>
  );
}
export default Users;
