import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';

import SearchInput from '../searchInput/SearchInput';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

import './navbar.css';
import { getAPI } from '../../services/api';


const Navbar = () => {
  const user = localStorage.getItem("username");
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
  const [activeCategory, setActiveCategory] = useState('');



  useEffect(() => {
    const updateAvatar = () => {
      const storedAvatar = localStorage.getItem("avatar");
      if (storedAvatar !== avatar) {
        setAvatar(storedAvatar);
      }
    };

    updateAvatar();
  }, [avatar]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = () =>{
    navigate("/profile");
  }
  const handleSavePost = () =>{
    navigate("/post-saved");
  }

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("username");
    navigate('/');
  }

// window.addEventListener('scroll', function() {
//   const header = document.querySelector('.header');
//   const sticky = header.offsetTop;

//   if (window.pageYOffset > sticky) {
//     header.classList.add('sticky-header');
//   } else {
//     header.classList.remove('sticky-header');
//   }
// });
  const [categories, setCategories] = useState([]);

  const api = {"svClass" : "TpyCategoryService", "svName" : "SVList"}
  useEffect(() => {
    const req_categories = async () => {
      const response = await getAPI(api);
      localStorage.setItem("categories",response.data);
      console.log(response.data)
      setCategories(response.data);
    }

    req_categories();
  },[])

  return (
    // <!-- Header -->
    <header className="header shop">
      {/* <!-- Topbar --> */}
      <div className="topbar">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-12 col-12">
              {/* <!-- Top Left --> */}
              <div className="top-left">
                <ul className="list-main">
                  <li><CallIcon className='icon' /> +84 906 550 238</li>
                  <li><EmailIcon className='icon' /><a href="mailto: th316942@gmail.com">spepo@gmail.com</a></li>
                </ul>
              </div>
              {/* <!-- End Top Left --> */}
            </div>

            <div className="col-lg-6 col-md-12 col-12">
              {/* <!-- Top Right --> */}
              <div className="right-content">
                <ul className="list-main">
                  <li><LocationOnIcon className='icon' /> 123 ABC Street</li>
                  <li><LanguageIcon className='icon' />English</li>
               
                </ul>
              </div>
              {/* <!-- End Top Right --> */}
            </div>

          </div>
        </div>
      </div>

      {/* <!-- End Topbar --> */}
      <div className="middle-inner">
        <div className="container">
          <div className="row">

            <div className="col-lg-2 col-md-2 col-12">
              <div className="logo">
                <Link to={'/'} ><img src={require('../../assets/img/favicon.png')}   style={{ height: '60px' }} alt="logo" /></Link>
              </div>
            </div>

            <div className="col-lg-8 col-md-7 col-12">
              <div className="search-bar-top">
                <div className="search-bar">
                  <SearchInput />
                  <button className="btnn"><SearchIcon /></button>

                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                {user ? <><Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar className='avatar' src={avatar}></Avatar>
                    {user}
                  </IconButton>
                </Tooltip>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&:before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem onClick={handleProfile}>
                      <Avatar/> Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleSavePost}>
                      <ListItemIcon>
                        <TurnedInIcon fontSize="small" />
                      </ListItemIcon>
                      Saved Post
                    </MenuItem>
                    <MenuItem onClick={logout}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </> : <><Link to={'/login'}><PowerSettingsNewIcon className='icon' />Login</Link> </>}
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <!-- Header Start --> */}
      <div id="header" >
        <div className="container">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link to={'#'} className="navbar-brand">MENU</Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav m-auto" >
              <Link
                to={'/'}
                className="nav-item nav-link"
                style={{ color: activeCategory === '' ? '#FF0000' : '#FFFFFF' }}
                onClick={() => setActiveCategory('')}
              >
                Home
              </Link>
                {
                  categories.map((item) => (
                    <Link
                    key={item.id}
                    to={`/category-page/${item.id}`}
                    className="nav-item nav-link"
                    style={{ color: activeCategory === item.id ? '#FF0000' : '#FFFFFF' }}
                    onClick={() => setActiveCategory(item.id)}
                  >
                    {item.name}
                  </Link>
                  ))
                }
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Header End --> */}

    </header>
    // {/* <!--/ End Header --> */ }
  )
}

export default Navbar