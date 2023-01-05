import styles from './Stats.module.css'

interface StatsProps {
  createdTasks: number
  finishedTasks: number
}

export function Stats({ createdTasks, finishedTasks }: StatsProps) {
  return (
    <div className={styles.stats}>
      <p className={styles.statContainer} style={{ color: 'var(--blue)' }}>
        Tarefas criadas{' '}
        <span className={styles.statNumber}>{createdTasks}</span>
      </p>
      <p className={styles.statContainer} style={{ color: 'var(--purple)' }}>
        Tarefas concluídas{' '}
        <span className={styles.statNumber}>{finishedTasks}</span>
      </p>
    </div>
  )
}
