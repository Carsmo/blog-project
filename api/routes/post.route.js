import express from 'express';
import {verifyToken} from '../utils/verifyUser.js';
import { create } from '../controllers/post.controller.js';
import { getposts } from '../controllers/post.controller.js';
import { deletePost } from '../controllers/post.controller.js';
import { updatePost } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getposts', getposts)
router.delete('/deletepost/:postId/:userId', verifyToken, deletePost);
router.put('/updatepost/:postId/:userId', verifyToken, updatePost);

export default router;
