import PostCategory from "../../pages/user/nso/PostCategory";
import Profile from "../../pages/user/aut/Profile";
import PostSave from "../../pages/user/nso/PostSave";

export const navRoutes = [
    { path : "/category-page/:id",         element  : <PostCategory />      },
    { path : "/profile",                   element  : <Profile />           },
    { path : "/post-saved",                   element  : <PostSave />          }
]