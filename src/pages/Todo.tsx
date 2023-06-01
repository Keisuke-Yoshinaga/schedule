import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from '../components/todo/Container';
import Input from '../components/todo/Input';
import Summary from '../components/todo/Summary/Summary';
import Tasks from '../components/todo/Tasks/Tasks';

export interface Task {
  name: string;
  done: boolean;
  id: string;
}

function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    const newTask = {
      name: value,
      done: false,
      id: uuidv4(),
    };
    setTasks((tasks) => [...tasks, newTask]);
  };

  const toggleDoneTask = (id: string, done: boolean) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          t.done = done;
        }
        return t;
      })
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="border shadow p-10 flex flex-col gap-10 sm:w-[640px]">
          <div className="flex flex-col text-center">
            <h1 className="text-xl text-gray-800">TODO</h1>
          </div>
          <Container title={'Summary'}>
            <Summary tasks={tasks} />
          </Container>
          <Container>
            <Input handleSubmit={handleSubmit} />
          </Container>
          <Container title={'Tasks'}>
            <Tasks
              tasks={tasks}
              toggleDone={toggleDoneTask}
              handleDelete={handleDeleteTask}
            />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Todo;
