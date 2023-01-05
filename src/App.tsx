import { useState } from 'react'
import { Header } from './components/Header'
import { Stats } from './components/Stats'
import { TaskCard } from './components/TaskCard'

export interface Task {
  isFinished: boolean
  title: string
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>()

  const finishedTasks = tasks?.filter((task) => task.isFinished === true).length

  function createTask(title: string) {
    if (!title.trim()) {
      return alert('Informe uma tarefa')
    }

    const taskExists = tasks?.find((task) => task.title === title)

    if (taskExists) {
      return alert('Essa tarefa já existe')
    }

    setTasks((prevState) => {
      return [{ isFinished: false, title }, ...(prevState || [])]
    })
  }

  function removeTask(title: string) {
    setTasks((prevState) => prevState?.filter((task) => task.title !== title))
  }

  // não funcionou o colocar task.isFinished = !task.isFinished para marcar e desmarcar, ele mostra um monte de true e false no console e nao sei o que faço
  function finishTask(title: string) {
    setTasks((prevState) =>
      prevState?.map((task) => {
        if (task.title === title) {
          task.isFinished = true
        }

        return task
      }),
    )
  }

  function unfinishTask(title: string) {
    setTasks((prevState) =>
      prevState?.map((task) => {
        if (task.title === title) {
          task.isFinished = false
        }

        return task
      }),
    )
  }

  return (
    <div>
      <Header createTask={createTask} />
      <Stats
        createdTasks={tasks?.length || 0}
        finishedTasks={finishedTasks || 0}
      />

      <div style={{ width: '100%', maxWidth: '736px', margin: '24px auto' }}>
        {tasks?.map((task) => {
          return (
            <TaskCard
              key={task.title}
              task={task}
              removeTask={removeTask}
              finishTask={finishTask}
              unfinishTask={unfinishTask}
            />
          )
        })}
      </div>
    </div>
  )
}
