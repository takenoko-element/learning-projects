'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (!newTaskText.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      text: newTaskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const handleToggleTask = (id: string) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      }),
    );
  };

  return (
    <main className="container mx-auto mt-10 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>

      {/* Todo追加フォーム */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="新しいタスクを入力..."
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddTask}
        />
        <Button onClick={handleAddTask}>追加</Button>
      </div>

      {/* Todoリスト */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center p-4 border rounded-lg"
          >
            <Checkbox
              id={task.id}
              checked={task.completed}
              onCheckedChange={() => handleToggleTask(task.id)}
            />
            <label
              htmlFor={task.id}
              className={`ml-3 text-lg flex-grow ${
                task.completed ? 'line-through text-muted-foreground' : ''
              }`}
            >
              {task.text}
            </label>
            {/* あとで削除ボタンを追加する */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default TodoPage;
