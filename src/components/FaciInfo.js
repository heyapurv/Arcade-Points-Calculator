"use client";
import React, { useEffect, useState } from 'react'
import FaciCard from './FaciCard'

const FaciInfo = ({ faciData }) => {
    const [milestone1, setMilestone1] = useState({ "game": 0, "trivia": 0, "skill": 0, "color": "gray", "milestoneName": "" });
    const [milestone2, setMilestone2] = useState({ "game": 0, "trivia": 0, "skill": 0, "color": "gray", "milestoneName": "" });
    const [milestone3, setMilestone3] = useState({ "game": 0, "trivia": 0, "skill": 0, "color": "gray", "milestoneName": "" });
    const [milestone4, setMilestone4] = useState({ "game": 0, "trivia": 0, "skill": 0, "color": "gray", "milestoneName": "" });

    useEffect(() => {
        // { game, trivia, skill, color, milestoneName }
        const { faciGame, faciTrivia, faciSkill } = faciData;
        setMilestone4({
            "game": faciGame > 6 ? 6 : faciGame,
            "trivia": faciTrivia > 8 ? 8 : faciTrivia,
            "skill": faciSkill > 42 ? 42 : faciSkill,
            "color": "#4384F4",
            "milestoneName": "Ultimate Milestone"
        })
        setMilestone3({
            "game": faciGame > 5 ? 5 : faciGame,
            "trivia": faciTrivia > 6 ? 6 : faciTrivia,
            "skill": faciSkill > 28 ? 28 : faciSkill,
            "color": "#FABD05",
            "milestoneName": "Milestone 3"
        })
        setMilestone2({
            "game": faciGame > 3 ? 3 : faciGame,
            "trivia": faciTrivia > 4 ? 4 : faciTrivia,
            "skill": faciSkill > 18 ? 18 : faciSkill,
            "color": "#34A952",
            "milestoneName": "Milestone 2"
        })
        setMilestone1({
            "game": faciGame > 2 ? 2 : faciGame,
            "trivia": faciTrivia > 2 ? 2 : faciTrivia,
            "skill": faciSkill > 8 ? 8 : faciSkill,
            "color": "#EA4335",
            "milestoneName": "Milestone 1"
        })
    }, [faciData])


    return (
        <section className='p-2 container mb-8 mx-20 bg-slate-950'>
            <h1 className='text-center text-xl text-cyan-400 font-semibold m-2 mb-4'>Program Completion Status: </h1>
            <div className="grid grid-cols-1 mx-40 gap-8">
                <FaciCard milestone={milestone1} />
                <FaciCard milestone={milestone2} />
                <FaciCard milestone={milestone3} />
                <FaciCard milestone={milestone4} />
            </div>
        </section>
    )
}

export default FaciInfo