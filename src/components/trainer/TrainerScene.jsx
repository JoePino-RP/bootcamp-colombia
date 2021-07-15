import React from 'react'
import TrainerCard from './TrainerCard/TrainerCard'
import trainer from '../../utils/trainerData.json'

const TrainerScreen = () => {
  return (
    <div>
      <TrainerCard
        name={trainer.name}
        badgesByRegion={trainer.badges}
        image={trainer.image}
      />
    </div>
  )
}

export default TrainerScreen