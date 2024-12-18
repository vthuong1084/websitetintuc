import React, { useEffect } from 'react';
import { useState } from 'react';

import PostCard from '../../../components/postCard/PostCard';

import {getAPI} from '../../../services/api';
import { useParams } from 'react-router-dom';

import '../nso/postCategory.css'

const PostSave = () => {

    const [reloadData, setReloadData] = useState(false);
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    const user = localStorage.getItem("username");
    const reloadHandler = () => {
        setReloadData(prev => !prev); 
    };
   
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    // Lấy danh sách bài viết đã lưu của người dùng từ localStorage
    const userSavedPosts = JSON.parse(localStorage.getItem(`savedPosts_${user}`)) || [];
    setSavedPosts(userSavedPosts);
  }, [user]);

    return (
        <>
             <div className="container" style={{marginTop: "5%"}}>
                <div className="row">
                    <div className='col-lg-8 col-12'>
                        <div className="main-content">
                            <div className="row">
                            {savedPosts.map((post) => (
                                <div key={post.id}>
                                    <PostCard post={post} />
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>

            <div className="col-lg-4 col-12">
                        <div className="main-sidebar">
                            {/* <!-- Single Widget --> */}
                            <div className="single-widget search">
                                <div className="form">
                                    <input type="email" placeholder="Search Here..." />
                                    <a className="button" href="#"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            {/* <!--/ End Single Widget -->
            <!-- Single Widget --> */}
                            <div className="single-widget category">
                                <h3 className="title">Blog Categories</h3>
                                <ul className="categor-list">
                                    <li><a href="#">Men's Apparel</a></li>
                                    <li><a href="#">Women's Apparel</a></li>
                                    <li><a href="#">Bags Collection</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Sun Glasses</a></li>
                                </ul>
                            </div>
                            {/* <!--/ End Single Widget -->
            <!-- Single Widget --> */}
                            <div className="single-widget recent-post">
                                <h3 className="title">Recent post</h3>
                                {/* <!-- Single Post --> */}
                                <div className="single-post">
                                    <div className="image">
                                        <img src="https://via.placeholder.com/100x100" alt="#" />
                                    </div>
                                    <div className="content">
                                        <h5><a href="#">Top 10 Beautyful Women Dress in the world</a></h5>
                                        <ul className="comment">
                                            <li><i className="fa fa-calendar" aria-hidden="true"></i>Jan 11, 2020</li>
                                            <li><i className="fa fa-commenting-o" aria-hidden="true"></i>35</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- End Single Post --> */}
                                {/* <!-- Single Post -->/ */}
                                <div className="single-post">
                                    <div className="image">
                                        <img src="https://via.placeholder.com/100x100" alt="#" />
                                    </div>
                                    <div className="content">
                                        <h5><a href="#">Top 10 Beautyful Women Dress in the world</a></h5>
                                        <ul className="comment">
                                            <li><i className="fa fa-calendar" aria-hidden="true"></i>Mar 05, 2019</li>
                                            <li><i className="fa fa-commenting-o" aria-hidden="true"></i>59</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- End Single Post --> */}
                                {/* <!-- Single Post --> */}
                                <div className="single-post">
                                    <div className="image">
                                        <img src="https://via.placeholder.com/100x100" alt="#" />
                                    </div>
                                    <div className="content">
                                        <h5><a href="#">Top 10 Beautyful Women Dress in the world</a></h5>
                                        <ul className="comment">
                                            <li><i className="fa fa-calendar" aria-hidden="true"></i>June 09, 2019</li>
                                            <li><i className="fa fa-commenting-o" aria-hidden="true"></i>44</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- End Single Post --> */}
                            </div>
                            <div className="single-widget side-tags">
                                <h3 className="title">Tags</h3>
                                <ul className="tag">
                                    <li><a href="#">business</a></li>
                                    <li><a href="#">wordpress</a></li>
                                    <li><a href="#">html</a></li>
                                    <li><a href="#">multipurpose</a></li>
                                    <li><a href="#">education</a></li>
                                    <li><a href="#">template</a></li>
                                    <li><a href="#">Ecommerce</a></li>
                                </ul>
                            </div>
                            {/* <!--/ End Single Widget -->
            <!-- Single Widget --> */}
                            <div className="single-widget newsletter">
                                <h3 className="title">Newslatter</h3>
                                <div className="letter-inner">
                                    <h4>Subscribe & get news <br></br> latest updates.</h4>
                                    <div className="form-inner">
                                        <input type="email" placeholder="Enter your email" />
                                        <a href="#">Submit</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/ End Single Widget --> */}
                        </div>
                    </div>
              </div>
              </div>  
     </>
         
    )
}

export default PostSave