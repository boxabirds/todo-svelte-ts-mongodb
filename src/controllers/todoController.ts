import { Request, Response } from 'express';
import Todo from '../models/Todo'; // Assuming Todo is your Mongoose model

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const { title, completed } = req.body;
  const newTodo = new Todo({
    title,
    completed
  });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
    res.status(200).json(updatedTodo);
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
};
