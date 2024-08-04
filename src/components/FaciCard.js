"use client";
import React, { useEffect } from 'react'
import ProgressBar from './ProgressBar';

const FaciCard = ({ milestone }) => {
    const { game, trivia, skill, color, milestoneName } = milestone;

    const getMilestoneTotal = (milestoneName) => {
        switch (milestoneName) {
            case "Ultimate Milestone":
                return { totalGame: 6, totalTrivia: 8, totalSkill: 42, totalMilestonePoints: 56 };
            case "Milestone 3":
                return { totalGame: 5, totalTrivia: 6, totalSkill: 28, totalMilestonePoints: 39 };
            case "Milestone 2":
                return { totalGame: 3, totalTrivia: 4, totalSkill: 18, totalMilestonePoints: 27 };
            case "Milestone 1":
                return { totalGame: 2, totalTrivia: 2, totalSkill: 8, totalMilestonePoints: 12 };
            default:
                return { totalGame: 0, totalTrivia: 0, totalSkill: 0, totalMilestonePoints: 1 };
        }
    };

    const { totalGame, totalTrivia, totalSkill, totalMilestonePoints } = getMilestoneTotal(milestoneName);

    return (
        <div className='  backdrop-blur-lg p-2 border border-gray-600 rounded-xl'>
              <ProgressBar 
            percentage={(((game + trivia + skill) / totalMilestonePoints) * 100).toFixed(2)} 
            color={color} 
            milestoneName={milestoneName}  
            className='' 
        />
        <div className='flex justify-between items-center  '>
            <h1 className='text-sm md:text-xl font-mono text-gray-500'>{`Game : ${game}/${totalGame}`}</h1>
            <h1 className='text-sm md:text-xl font-mono text-gray-500'>{`Trivia : ${trivia}/${totalTrivia}`}</h1>
            <h1 className='text-sm md:text-xl font-mono text-gray-500'>{`Skill Badge : ${skill}/${totalSkill}`}</h1>
        </div>
      
    </div>
    
    )
}

export default FaciCard