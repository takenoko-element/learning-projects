'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Trash2, Pencil, PenOff } from 'lucide-react';
import React, { useState } from 'react';

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editTaskText, setEditTaskText] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
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

  const handleStartEdit = (task: Task) => {
    setEditingTaskId(task.id);
    setEditTaskText(task.text);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editTaskText.trim()) {
      setTasks(
        tasks.map((task) => {
          return task.id === editingTaskId
            ? { ...task, text: editTaskText }
            : task;
        }),
      );
    }
    setEditingTaskId(null);
    setEditTaskText('');
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="container mx-auto mt-10 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>

      {/* Todo追加フォーム */}
      <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
        <Input
          type="text"
          placeholder="新しいタスクを入力..."
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <Button type="submit">追加</Button>
      </form>

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
            {task.id === editingTaskId ? (
              <form
                onSubmit={handleSaveEdit}
                className="flex flex-grow gap-2 items-center"
              >
                <Input
                  type="text"
                  value={editTaskText}
                  onChange={(e) => setEditTaskText(e.target.value)}
                  autoFocus
                />
                <Button type="submit" variant="ghost" size="icon">
                  <PenOff className="h-4 w-4" />
                </Button>
              </form>
            ) : (
              <>
                <label
                  htmlFor={task.id}
                  className={`ml-3 text-lg flex-grow ${
                    task.completed ? 'line-through text-muted-foreground' : ''
                  }`}
                >
                  {task.text}
                </label>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleStartEdit(task)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
              </>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDeleteTask(task.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TodoPage;
