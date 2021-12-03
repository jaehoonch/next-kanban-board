import Head from 'next/head'
import KanbanBoard from '../components/KanbanBoard'
import Navbar from '../components/Navbar'
import ProjectTitle from '../components/ProjectTitle'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="container mx-auto overflow-hidden border-r border-l border-gray-200">
      <Head>
        <title>Next Kanban Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 p-10">
          <ProjectTitle />
          <KanbanBoard />
        </div>
      </div>
    </div>
  )
}
