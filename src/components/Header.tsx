import logoImg from '../assets/logo.svg'
import styles from './Header.module.css'
import { Input } from './Input'

interface HeaderProps {
  createTask: (title: string) => void
}

export function Header({ createTask }: HeaderProps) {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="" />

      <Input createTask={createTask} />
    </header>
  )
}
