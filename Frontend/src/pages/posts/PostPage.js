import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import AddPostModal from './AddPostModal';
import PostCard from './PostCard';

function PostPage() {
  const role = useSelector(store => store.auth.user?.role);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);  
  };

  const isLoading = useSelector(store => store.post?.loading);
  const posts = useSelector(store => store.post?.posts);

  return (
    <div className='p-5'>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {role === "Admin" && (
        <div className='flex flex-col'>
          <div className='w-[5rem] h-[5rem] bg-cyan-950 text-white text-xs flex justify-center items-center rounded-lg cursor-pointer' onClick={handleOpenModal}>
            <AddCircleIcon sx={{ fontSize: 'medium', cursor: 'pointer' }} />
            <span className="cursor-pointer">Add Post</span>
          </div>
          <AddPostModal open={openModal} close={handleCloseModal} />
        </div>
      )}
      <div className='py-5'>
        {posts.map(post => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export default PostPage;
