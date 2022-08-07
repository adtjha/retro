import type { NextPage } from "next";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

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
        <div className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer'>
          Create new task
        </div>
      </Link>
    </div>
  );
};

export default Home;
