import { Router } from 'express';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';

const router = Router();

router.get('/', getAllTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
