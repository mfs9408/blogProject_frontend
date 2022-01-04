import React, { Dispatch, SetStateAction, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PostService } from '../../services/PostService';
import { ContextStore } from '../MyPostsProvider/MyPostsProvider';
import { PostType } from '../../types';

interface DialogInterface {
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  postId: string;
}

const DeleteDialog = ({
  title,
  postId,
  isDialogOpen,
  setIsDialogOpen,
}: DialogInterface) => {
  const { myPosts, setMyPosts } = useContext(ContextStore);

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handlePostDelete = () => {
    PostService.deletePost(postId)
      .then(() => {
        setMyPosts(myPosts.filter((post: PostType) => post.id !== postId));
      })
      .catch((e) => console.log(e))
      .finally(() => setIsDialogOpen(false));
  };

  return (
    <Dialog open={isDialogOpen} onClose={handleClose}>
      <DialogTitle>{`Deleting "${title}" post `}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the post?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handlePostDelete} color="error" variant="contained">
          Delete
        </Button>
        <Button
          onClick={handleClose}
          autoFocus
          color="primary"
          variant="contained"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
