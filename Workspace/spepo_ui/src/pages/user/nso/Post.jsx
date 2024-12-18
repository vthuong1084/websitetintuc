import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getAPI } from '../../../services/api';

import './post.css';

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});


  useEffect(() => {
    const req_post = async () => {
      try {
      const response = await getAPI({"svClass" : "NsoPostService", "svName" : "SVGet" , "postDTO" : { "id" : id}});
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    }

    req_post();
  }, []); 

  return (
    <section className="blog-single section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="blog-single-main">
              <div className="row">
                <div className="col-12">
                  <div className="image">
                    <img src={post.thumbnail} alt="#" />
                  </div>
                  <div className="blog-detail">
                    <h2 className="blog-title">{post.title}</h2>
                    <div className="blog-meta">
                      <span className="author"><Link to={'#'}><i className="fa fa-user"></i>By Admin</Link><Link to={'#'}><i className="fa fa-calendar"></i>Dec 24, 2018</Link><Link to={'#'}><i className="fa fa-comments"></i>Comment (15)</Link></span>
                    </div>
                    <div className="content">
                    <div dangerouslySetInnerHTML={{ __html: post.content01 }} />
                    
                    </div>
                  </div>
                  <div className="share-social">
                    <div className="row">
                      <div className="col-12">
                        <div className="content-tags">
                          <h4>Tags:</h4>
                          <ul className="tag-inner">
                            <li><Link to={'#'}>Sport</Link></li>
                            <li><Link to={'#'}>Health</Link></li>
                            <li><Link to={'#'}>Books</Link></li>
                            <li><Link to={'#'}>Finance</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="comments">
                    <h3 className="comment-title">Comments (3)</h3>
                    {/* <!-- Single Comment --> */}
                    <div className="single-comment">
                      <img src="https://via.placeholder.com/80x80" alt="#" />
                      <div className="content">
                        <h4>Alisa harm <span>At 8:59 pm On Feb 28, 2018</span></h4>
                        <p>Enthusiastically leverage existing premium quality vectors with enterprise-wide innovation collaboration Phosfluorescently leverage others enterprisee  Phosfluorescently leverage.</p>
                        <div className="button">
                          <Link to={'#'} className="btn"><i className="fa fa-reply" aria-hidden="true"></i>Reply</Link>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Comment --> */}
                    {/* <!-- Single Comment --> */}
                    <div className="single-comment left">
                      <img src="https://via.placeholder.com/80x80" alt="#" />
                      <div className="content">
                        <h4>john deo <span>Feb 28, 2018 at 8:59 pm</span></h4>
                        <p>Enthusiastically leverage existing premium quality vectors with enterprise-wide innovation collaboration Phosfluorescently leverage others enterprisee  Phosfluorescently leverage.</p>
                        <div className="button">
                          <Link to={'#'} className="btn"><i className="fa fa-reply" aria-hidden="true"></i>Reply</Link>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Comment -->
                  <!-- Single Comment --> */}
                    <div className="single-comment">
                      <img src="https://via.placeholder.com/80x80" alt="#" />
                      <div className="content">
                        <h4>megan mart <span>Feb 28, 2018 at 8:59 pm</span></h4>
                        <p>Enthusiastically leverage existing premium quality vectors with enterprise-wide innovation collaboration Phosfluorescently leverage others enterprisee  Phosfluorescently leverage.</p>
                        <div className="button">
                          <Link to={'#'} className="btn"><i className="fa fa-reply" aria-hidden="true"></i>Reply</Link>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Comment --> */}
                  </div>
                </div>
                <div className="col-12">
                  <div className="reply">
                    <div className="reply-head">
                      <h2 className="reply-title">Leave a Comment</h2>
                      {/* <!-- Comment Form --> */}
                      <form className="form" action="#">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                              <label>Your Name<span>*</span></label>
                              <input type="text" name="name" placeholder="" required="required" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                              <label>Your Email<span>*</span></label>
                              <input type="email" name="email" placeholder="" required="required" />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label>Your Message<span>*</span></label>
                              <textarea name="message" placeholder=""></textarea>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group button">
                              <button type="submit" className="btn">Post comment</button>
                            </div>
                          </div>
                        </div>
                      </form>
                      {/* <!-- End Comment Form --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="main-sidebar">
              {/* <!-- Single Widget --> */}
              <div className="single-widget search">
                <div className="form">
                  <input type="email" placeholder="Search Here..." />
                  <Link className="button" to={'#'}><i className="fa fa-search"></i></Link>
                </div>
              </div>
              {/* <!--/ End Single Widget -->
            <!-- Single Widget --> */}
              <div className="single-widget category">
                <h3 className="title">Blog Categories</h3>
                <ul className="categor-list">
                  <li><Link to={'#'}>Men's Apparel</Link></li>
                  <li><Link to={'#'}>Women's Apparel</Link></li>
                  <li><Link to={'#'}>Bags Collection</Link></li>
                  <li><Link to={'#'}>Accessories</Link></li>
                  <li><Link to={'#'}>Sun Glasses</Link></li>
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
                    <h5><Link to={'#'}>Top 10 Beautyful Women Dress in the world</Link></h5>
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
                    <h5><Link to={'#'}>Top 10 Beautyful Women Dress in the world</Link></h5>
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
                    <h5><Link to={'#'}>Top 10 Beautyful Women Dress in the world</Link></h5>
                    <ul className="comment">
                      <li><i className="fa fa-calendar" aria-hidden="true"></i>June 09, 2019</li>
                      <li><i className="fa fa-commenting-o" aria-hidden="true"></i>44</li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End Single Post --> */}
              </div>
              {/* <!--/ End Single Widget -->
            <!-- Single Widget -->
            <!--/ End Single Widget -->
            <!-- Single Widget --> */}
              <div className="single-widget side-tags">
                <h3 className="title">Tags</h3>
                <ul className="tag">
                  <li><Link to={'#'}>business</Link></li>
                  <li><Link to={'#'}>wordpress</Link></li>
                  <li><Link to={'#'}>html</Link></li>
                  <li><Link to={'#'}>multipurpose</Link></li>
                  <li><Link to={'#'}>education</Link></li>
                  <li><Link to={'#'}>template</Link></li>
                  <li><Link to={'#'}>Ecommerce</Link></li>
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
                    <Link to={'#'}>Submit</Link>
                  </div>
                </div>
              </div>
              {/* <!--/ End Single Widget --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post