import { useState } from 'react';
import "../Description/Description.css"

const CoachDescription: React.FC = () => {
    const [name, setName] = useState<string>("Claudio aka Smoke");
    const [age, setAge] = useState<number>(25);
    const [game, setGame] = useState<string>("League of Legends");
    const [experience, setExperience] = useState<number>(3);
    const [bestPicks, setBestPicks] = useState<string[]>(
        ["Alistar", "Thresh", "Blitz", "Renata", "Kalista"]
    );
    const [sessionPlan, setSessionPlan] = useState<string[]>(
        ["Wave Management", "Spacing", "Trading", "General Macro", "Vision Control", "Builds", "Matchups"]
    );

    return (
        <div>
            <h1>Description</h1>
            <p>Hi guys, I'm {name} and I'm {age}!! I've always been passionate about video games, especially {game}. 
            I have {experience} years of full time coaching experience.</p>
            <p>My best picks are {bestPicks.join(", ")}.</p>
            <p>In my coaching plan you will learn and quickly become better at: {sessionPlan.join(", ")}</p>
            <p>What does one full session entail?</p>
            <ol>
                <li>Pre-game discussion - skill, desired rank (w/ op.gg)</li>
                <li>Live game commentating</li>
                <li>VOD Review Analysis</li>
                <li>Post game talk.</li>
            </ol>
        </div>
    );
}

export default CoachDescription;