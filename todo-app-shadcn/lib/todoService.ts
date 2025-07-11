import prisma from '@/lib/prisma';
import { User } from '@/types/user';

export const createTodo = async (text: string, user: User) => {
  const { userId } = user;
  if (!text.trim()) {
    throw new Error('タスクの入力は必須です。');
  }
  const newTodo = await prisma.todo.create({
    data: {
      text: text,
      userId: userId,
    },
  });

  return newTodo;
};
