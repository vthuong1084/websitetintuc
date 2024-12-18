import Users from "../../pages/adm/aut/Users";
import Roles from "../../pages/adm/aut/Roles";
import Posts from "../../pages/adm/nso/Posts";
import Categories from "../../pages/adm/nso/Categories";
import Profile from "../../pages/adm/aut/Profile";
import UserDetail from "../../pages/adm/aut/UserDetail";
import User from "../../pages/adm/aut/User";
import NewPost from "../../pages/adm/nso/NewPost";
import Post from "../../pages/adm/nso/Post";
import Role from "../../pages/adm/aut/Role";
import Category from "../../pages/adm/nso/Category";


export const routes = [
    { path : "users",         element  : <Users />      },
    { path : "roles",         element  : <Roles />      },
    { path : "categories",      element  : <Categories/>  },
    { path : "profile",   element  : <Profile/>     },
    { path : "user/:id",      element  : <User/>  },
    { path : "posts",          element  : <Posts/>       },
    { path : "new-post",           element  : <NewPost/>       },
    { path : "update-post/:id",           element  : <Post/>       },
    { path : "role/:id",           element  : <Role/>       },
    { path : "role",           element  : <Role/>},
    { path : "category",           element  : <Category/>},
    { path : "category/:id",           element  : <Category/>}

]