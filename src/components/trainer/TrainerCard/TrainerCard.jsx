import React from 'react'
import './TrainerCard.css'

const TrainerCard = ({
  image,
  badgesByRegion,
  name,
}) => (
  <div className="Trainer-card">
    <div className="Trainer-image">
      <img alt="Trainer" src={image} />
    </div>

    <div className="Trainer-detail">
      <div className="Trainer-name">
        <span>{name}</span>
      </div>
      <div>
        {badgesByRegion.map((region) => (
          <div key={region.region} className="Trainer-medal-region">
            <span>{region.region}</span>
            {region.badges.map((badge) => (
              <img 
                alt={badge.name} 
                src={badge.imageSrc}
                className={`Trainer-medal${!badge.captured ? ' Trainer-medal-missing' : ''}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default TrainerCard