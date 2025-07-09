import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

const userId = '1';

export const GET = async () => {
  try {
    const todos = await prisma.todo.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(todos);
  } catch (error) {
    console.error('[GET] API Request Failed:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。' },
      { status: 500 },
    );
  }
};
