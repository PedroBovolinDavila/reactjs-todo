import checkIcon from '../assets/check.svg'
import styles from './Checkbox.module.css'

interface CheckboxProps {
  isChecked: boolean
  onClick: () => void
}

export function Checkbox({ isChecked, onClick }: CheckboxProps) {
  return (
    <button
      className={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked}
      onClick={onClick}
    >
      {isChecked && <img src={checkIcon} alt="" />}
    </button>
  )
}
