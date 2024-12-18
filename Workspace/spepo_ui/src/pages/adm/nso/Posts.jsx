import React, { useState,  useEffect}  from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import {getAPI} from '../../../services/api';
import Datatable from '../../../components/datatables/Datatables';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import '../../../assets/bootstrap-5.3.1-dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useNavigate } from 'react-router-dom';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

const svClass = "NsoPostService";
let svName  = "SVList";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
// const ExpandMore = ({ expand, onClick }) => {
//   return (
//     <IconButton onClick={onClick}>
//       <ExpandMoreIcon style={{ transform: expand ? 'rotate(180deg)' : 'rotate(0deg)' }} />
//     </IconButton>
//   );
// };
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

const Posts = () => {
  const [data, setData]                         = useState([]);
  const [value, setValue] =   useState(0);
  const [valueNested, setValueNested] = useState(0); 

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [filteredData01, setFilteredData01] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1); 
  const [expandedIndex1, setExpandedIndex1] = useState(-1); 

  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const [currentPageDraft, setCurrentPageDraft] = useState(1);
  const [itemsPerPageDraft, setItemsPerPageDraft] = useState(4);


  const handleCategoryChange = async (event, newValue) => {
    setValueNested(newValue);
    const api = { svClass: "NsoPostService", svName: "SVListDyn", postDTO: { "category": newValue + 1 } };
  
    try {
      const response = await getAPI(api);
      setData(response.data);
  
      if (value === 0) {
        const postData = response.data.filter(post => post.status01 === 1);
        setFilteredData01(postData);
      } else {
        const postData01 = response.data.filter(post => post.status01 === 0);
        setFilteredData(postData01);
      }
    } catch (error) {
      console.error('Error fetching posts by category:', error);
    }
  };
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await getAPI({ "svClass": "TpyCategoryService", "svName": "SVList" });
          setCategories(response.data);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
      fetchCategories();
    }, []);
    useEffect(() => {
      const fetchCategories = async () => {
        const api = { svClass: "NsoPostService", svName: "SVList"};
        try {
          const response = await getAPI(api);
          setData(response.data);
          
        } catch (error) {
          console.error('Error fetching posts by category:', error);
        }
      };
      fetchCategories();
    }, []);
   


  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };
  
  const handleExpandClick1 = (index1) => {
    setExpandedIndex1(expandedIndex1 === index1 ? -1 : index1);
  };


  const handleSearch = () => {
    const searchTermLower = searchTerm.toLowerCase();
  
    const filteredUsersPosted = data.filter(
      (post) =>
        post.status01 === 1 &&
        post.title.toLowerCase().includes(searchTermLower)
    );
  
    const filteredUsersDraft = data.filter(
      (post) =>
        post.status01 === 0 &&
        post.title.toLowerCase().includes(searchTermLower)
    );
  
    if (filteredUsersPosted.length > 0) {
      setValue(0);
      const categoriesPosted = filteredUsersPosted.map((post) => post.category);
      setValueNested(categoriesPosted[0] - 1);
      setFilteredData(
        filteredUsersPosted.filter((post) => post.category === categoriesPosted[0])
      );
      setFilteredData01([]);
     
    } else if (filteredUsersDraft.length > 0) {
      setValue(1);
      const categoriesDraft = filteredUsersDraft.map((post) => post.category);
      setValueNested(categoriesDraft[0] - 1);
      setFilteredData01(
        filteredUsersDraft.filter((post) => post.category === categoriesDraft[0])
      );
      setFilteredData([]);
      
    } else {
      setValue(-1);
      alert('No matching posts found.');
    }
  };
  
  
  // useEffect(() => {
  //   handleSearch();
  // }, [searchTerm]);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAdd = () => {
    navigate(`/admin/new-post`);
  };

  const handleView = (id) => {
    navigate(`/admin/update-post/${id}`);
  };
  const handlePost = (id) => {
    svName = "SVMod";
    const updatedPosts = data.map(post => {
      if (post.id === id) {
        return {
          ...post,
          status01: 1
        };
      }
      return post;
    });
  
    const posted = { "svClass": svClass, "svName": svName, "postDTO": updatedPosts.find(post => post.id === id) };
    getAPI(posted)
      .then(response => {
        navigate(`/admin/posts`);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  }

  const handleReport = (id) =>{
    svName = "SVMod";
    const updatedPosts = data.map(post => {
      if (post.id === id) {
        return {
          ...post,
          status01: 0
        };
      }
      return post;
    });
  
    const reportPost = { "svClass": svClass, "svName": svName, "postDTO": updatedPosts.find(post => post.id === id) };
    getAPI(reportPost)
      .then(response => {
        navigate(`/admin/posts`);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  }

  const handlePageChangePosted = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageChangeDraft = (pageNumber) => {
    setCurrentPageDraft(pageNumber);
  };
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData01.slice(indexOfFirstItem, indexOfLastItem);

  const indexOfLastItemDraft = itemsPerPageDraft * currentPageDraft;
  const indexOfFirstItemDraft = indexOfLastItemDraft - itemsPerPageDraft;
  const currentItemsDraft = filteredData.slice(indexOfFirstItemDraft, indexOfLastItemDraft);

  const pageNumbers = [];
  const pageNumbersDraft = [];
  
  for (let i = 1; i <= Math.ceil(filteredData01.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPageDraft); i++) {
    pageNumbersDraft.push(i);
  }
  pageNumbers.map(number => (
    <button key={number} onClick={() => setCurrentPage(number)}>
      {number}
    </button>
  ));

  pageNumbersDraft.map(number => (
    <button key={number} onClick={() => setCurrentPageDraft(number)}>
      {number}
    </button>
  ));

  return (
    <>
   <Button sx={{ width:10, borderColor:'#ffff', marginRight: '1%'}} size="small" onClick={() => handleAdd()} className="btn btn-primary px-1" > <AddToPhotosIcon/></Button> 
     <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Posted" {...a11yProps(0)} />
          <Tab label="Draft" {...a11yProps(1)} />
         
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
      <Box sx={{ width: '100%' }}>
       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={valueNested} onChange={handleCategoryChange} aria-label="basic tabs example">
        {
          categories.map((item) => (
            <Tab label={item.name} {...a11yProps(item.id)} />
          ))
        }
        </Tabs>
      </Box>
      <div className="row">
     {currentItems.map((post, index) => (
     
      <Card sx={{ maxWidth: 345, marginRight: '2%', marginBottom: '5%', marginTop: '3%' }} key={index}>
      <CardHeader
        avatar={
          <Avatar src={post.author} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader={post.datePubl}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.thumbnail}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.shortdescription}
        </Typography>
      </CardContent>
       <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <VisibilityIcon  onClick={() => handleView(post.id)}/>
        </IconButton>
        <IconButton aria-label="share">
        <ReportGmailerrorredIcon  onClick={() => handleReport(post.id)}/>
        </IconButton>
        <ExpandMore
          expand={expandedIndex === post.id}
          onClick={() => handleExpandClick(post.id)}
          aria-expanded={expandedIndex === post.id}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> 
      <Collapse
          in={expandedIndex === post.id}
          timeout="auto"
          unmountOnExit
        >
       <CardContent>
        
          <Typography paragraph><div dangerouslySetInnerHTML={{ __html: post.content01 }} /></Typography>
        </CardContent>
         </Collapse> 
       </Card>
      
      ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChangePosted(number)}
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
      </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <Box sx={{ width: '100%' }}>
       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={valueNested} onChange={handleCategoryChange} aria-label="basic tabs example">
        {
          categories.map((item) => (
            <Tab label={item.name} {...a11yProps(item.id)} />
          ))
        }
        </Tabs>
      </Box>
      <div className="row">
     {currentItemsDraft.map((post, index) => (
      <Card sx={{ maxWidth: 345, marginRight: '2%', marginBottom: '5%', marginTop: '3%' }} key={index}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.author}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader={post.datePubl}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.thumbnail}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.shortdescription}
        </Typography>
      </CardContent>
       <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <TaskAltIcon onClick={() => handlePost(post.id)}/> 
        </IconButton>
        <IconButton aria-label="share">
        <ReportGmailerrorredIcon />
        </IconButton>
        <ExpandMore
          expand={expandedIndex1 === post.id}
          onClick={() => handleExpandClick1(post.id)}
          aria-expanded={expandedIndex1 === post.id}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> 
      <Collapse
          in={expandedIndex1 === post.id}
          timeout="auto"
          unmountOnExit
        >
       <CardContent>
          <Typography paragraph>{post.content01}</Typography>
        </CardContent>
         </Collapse> 
       </Card>
      ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {pageNumbersDraft.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChangeDraft(number)}
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

    </Box>
     
      </CustomTabPanel>
    </Box>
    </>
  );
}
export default Posts;
