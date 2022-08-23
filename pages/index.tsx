import type { NextComponentType, NextPage } from "next";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const Tasks: NextComponentType = () => {
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
      {tasks.map((task) => (
        <div key={task["id"]} className='flex flex-wrap items-stretch gap-2'>
          {Object.keys(task).map((key, index) => (
            <div
              key={key}
              className='flex flex-col items-start justify-center space-y-2'>
              <div className='uppercase text-stone-400 text-sm'>
                {key.replaceAll("_", " ")}
              </div>
              <div className='text-stone-800'>{task[key]}</div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-start p-8 space-y-6'>
      <div className='w-full relative flex flex-row items-center justify-evenly'>
        <h1 className='text-3xl font-bold'>Tasks</h1>
        <div className='absolute -right-4 lg:right-10'>
          <UserButton />
        </div>
      </div>
      <Link href='/new/task'>
        <>
          <div className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer'>
            Create new task
          </div>
          <Tasks />
        </>
      </Link>
    </div>
  );
};

export default Home;
