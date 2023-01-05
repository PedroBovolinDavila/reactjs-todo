import { useState } from 'react'
import plusSvg from '../assets/plus.svg'
import styles from './Input.module.css'

interface InputProps {
  createTask: (title: string) => void
}

export function Input({ createTask }: InputProps) {
  const [taskTitle, setTaskTitle] = useState('')

  return (
    <div className={styles.inputForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        type="submit"
        className={styles.button}
        onClick={() => createTask(taskTitle)}
      >
        Criar <img src={plusSvg} alt="" />
      </button>
    </div>
  )
}
