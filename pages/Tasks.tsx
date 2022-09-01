import { NextComponentType, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

type Task = {
  id: string;
  name: string;
  description: string;
  days_of_the_week: Array<string>;
  time_of_the_day: string;
  created_at: string;
  start_date: string;
  end_date: string;
};

export const Tasks: NextComponentType = () => {
  const [isLoading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    supabase
      .from("tasks")
      .select("*")
      .range(0, 9)
      .then(({ data: tasks, error }) => {
        if (error) {
          console.log(error);
        } else {
          console.log(tasks);
          setLoading(false);
          setTasks(tasks as any);
        }
      });
  }, []);

  return isLoading ? (
    <>
      <svg
        className='animate-spin -ml-1 mr-3 h-5 w-5 text-stone-900'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'>
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'></circle>
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
      </svg>
    </>
  ) : (
    <>
      {tasks.map((task: Task, index: number) => (
        <div key={index}>
          <Task task={task} />
        </div>
      ))}
    </>
  );
};

type TaskProps = {
  task: Task;
};

export const Task: NextPage<TaskProps> = ({ task }) => {
  return (
    <div
      key={task["id"]}
      className='relative min-w-[480px] bg-stone-100 flex flex-col items-start justify-start pb-6 font-mono border border-stone-400 p-4 rounded-2xl'>
      <div className='col-span-1 flex flex-col items-start justify-end hover:bg-stone-50'>
        <h4 id='name' className='text-2xl'>
          {task["name"]}
        </h4>
      </div>
      <div className='col-span-4 flex flex-col items-start justify-start hover:bg-stone-50'>
        <h4 id='name' className='text-2xl'>
          {task["description"]}
        </h4>
      </div>
      <div className='absolute bottom-1 flex flex-row items-center justify-evenly space-x-1'>
        <h4 id='name' className='text-sm'>
          {new Date(task["start_date"]).toDateString()} -{" "}
          {new Date(task["end_date"]).toDateString()}
        </h4>
        {" ,"}
        <h4 id='name' className='text-sm'>
          {task["time_of_the_day"]}
        </h4>
      </div>
    </div>
  );
};
