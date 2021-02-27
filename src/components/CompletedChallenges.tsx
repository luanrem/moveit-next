import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import sytles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(challengesContext)

  return (
    <div className={sytles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}