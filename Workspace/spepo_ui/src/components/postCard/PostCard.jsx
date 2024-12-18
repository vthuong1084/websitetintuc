import React, { useState,  useEffect}  from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

export default function PostCard({ post }) {
  const user = localStorage.getItem("username");
  const navigate = useNavigate()
  const viewPost = () => {
    navigate(`/post/${post.id}`);
  }

  // trả về danh sách bài viết đã lưu của người dùng
  const getSavedPostsForUser = (userId) => {
    return JSON.parse(localStorage.getItem(`savedPosts_${userId}`)) || [];
  };

  // Kiểm tra xem bài viết đã được lưu hay chưa
  const [saved, setSaved] = useState(getSavedPostsForUser(user).some(savedPost => savedPost.id === post.id));

  // Lưu bài viết vào danh sách đã lưu của người dùng
  const savePostForUser = (userId, postToSave) => {
    const savedPosts = JSON.parse(localStorage.getItem(`savedPosts_${userId}`)) || [];

    if (!savedPosts.some(savedPost => savedPost.id === postToSave.id)) {
      savedPosts.push(postToSave);
      localStorage.setItem(`savedPosts_${userId}`, JSON.stringify(savedPosts));
    }
  };

  // Xóa bài viết khỏi danh sách đã lưu của người dùng
  const removeSavedPostForUser = (userId, postIdToRemove) => {
    const savedPosts = JSON.parse(localStorage.getItem(`savedPosts_${userId}`)) || [];
    const updatedPosts = savedPosts.filter(savedPost => savedPost.id !== postIdToRemove);
    localStorage.setItem(`savedPosts_${userId}`, JSON.stringify(updatedPosts));
  };

  const handleSave = () => {
    const isSaved = !saved;
    setSaved(isSaved);
    
    if (isSaved) {
      savePostForUser(user, post);
    } else {
      removeSavedPostForUser(user, post.id);
    }
  };

  return (
    <div style={{ display: 'flex', marginBottom: '5%' }}>
    <Card sx={{ height: 250, width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <CardActions disableSpacing onClick={handleSave}>
      {user ? (saved ? <TurnedInIcon /> : <TurnedInNotIcon />) : null} 
         
        </CardActions>
        <CardContent style={{ flex: 1 }} onClick={viewPost} >
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography color="GrayText" variant='subtitle1' >
            {post.datePubl}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.shortdescription}
          </Typography>
        </CardContent>
        <CardActionArea style={{ flex: 1 }}>
          <CardMedia
            component="img"
            height="250"
            image={post.thumbnail}
            alt=""
          />
        </CardActionArea>
       
      </div>
    </Card>
  </div>
  
  );
}