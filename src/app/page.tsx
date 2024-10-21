import HeaderProp from '@/components/Header';
import LinkTasks from '@/components/task/LinkTasks';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "MB'S Application - Home",

}

export default function Home() {


  return (
    <>
      <HeaderProp />
      <div className='flex flex-col items-center justify-center h-screen '>
        <div className=" flex flex-col gap-20 text-2xl text-gray-600 font-bold mb-4 ">
          <h3>Bienvenue dans MB'S Application : </h3>
          <h2><LinkTasks /></h2>
        </div>
      </div>
    </>
  );
}

