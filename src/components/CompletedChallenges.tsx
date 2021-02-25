import sytles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  return (
    <div className={sytles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  )
}