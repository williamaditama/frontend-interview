import React, { useEffect } from 'react';
import './App.css';
import { fetchList } from './services/api.service';

interface Task {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

type Tasks = Array<Task>

function App() {
  const [incompleteTasks, setIncompleteTasks] = React.useState<Tasks>([])
  const [completedTasks, setCompletedTasks] = React.useState<Tasks>([])
  
  useEffect(() => {
    const getList = async () => {
      const res = await fetchList()
      if (res.data.length > 0) {
        const incompleteTask = res.data.filter((d: any) =>d.completed === false)
        const completedTask = res.data.filter((d: any) => d.completed)
        
        setIncompleteTasks(incompleteTask)
        setCompletedTasks(completedTask)
      }
    }

    getList()
  }, [])
  return (
    <div className="p-20 grid grid-cols-2 gap-2">
      <div className="flex flex-col">
        <h2 className="text-4xl font-medium">Incomplete</h2>
        
        {/* wrapper for listing card */}
        <div className="p-4 flex flex-col gap-2 bg-slate-200">
          {/* card */}
          {incompleteTasks.map(task => (
            <div className="p-4 bg-white rounded">
              <a href="#" className="text-sm text-slate-600">{task.id}</a>
              <h4 className="text-lg font-medium capitalize">{task.title} </h4>
              <p>Removimg blablabla</p>
            </div>
          ))}
          {/* card */}
        </div>
        {/* wrapper for listing card */}
      </div>
      <div className="flex flex-col">
        <h2 className="text-4xl font-medium">Complete</h2>
        
        {/* wrapper for listing card */}
        <div className="p-4 flex flex-col gap-2 bg-slate-200">
          {/* card */}
          {completedTasks.map(task => (
            <div className="p-4 bg-white rounded">
              <a href="#" className="text-sm text-slate-600">{task.id}</a>
              <h4 className="text-lg font-medium capitalize">{task.title} </h4>
              <p>Removimg blablabla</p>
            </div>
          ))}
          {/* card */}
        </div>
        {/* wrapper for listing card */}
      </div>
    </div>
  );
}

export default App;
