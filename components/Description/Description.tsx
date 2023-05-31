import React from 'react';
import "../Description/Description.css"

interface CoachProps {
    name: string;
    age: number;
    game: string;
    experience: number;
    bestPicks: string[];
    sessionPlan: string[];
    sessionDetails: string[];
}

const CoachDescription: React.FC<CoachProps> = (props) => {
    return (
        <div>
            <p className='description'>Description</p>
            <div className='descriptionContent'>
                <p className='first'>Hi guys, I'm {props.name} and I'm {props.age}!! I've always been passionate about video games, especially {props.game}.
                    I started at the end of S4, reaching Master elo in s10-11-12 as support (atm MASTER 208lp).</p>
                <p>I have 3 years of full time coaching experience. I have been playing competitive League of Legends for 6years on EUW reaching PG Nats 2° Div.</p>
                <p>Ranking Master as a Support main, being able to climb to high diamond in every single role</p>
                <p>My best picks are {props.bestPicks.join(", ")}</p>
                <p>In my coaching plan you will learn and quickly become better at:</p>
                <p>{props.sessionPlan.join(", ")}</p>
                <p>What does one full session entail?</p>
                {props.sessionDetails.map((detail, index) => <p key={index}>{index + 1}-{detail}</p>)}
            </div>
            <div className='lang'>
                <img className='lang-img' src="/lang.png"></img>
                <div className='lang-box'>
                    <div className='lang-title'>Game</div>
                    <div className='lang-content'>{props.game}</div>
                </div>
                <div className='lang-box'>
                    <div className='lang-title'>Languages</div>
                    <div className='lang-content'>English, French and Italian</div>
                </div>
            </div>
            <div className='seller'>
                <p className='seller-title'>Seller</p>
                <div className='seller-info'>
                    <div className='info'>
                        <img className='seller-img' src="/seller.png"></img>
                        <p className='nickname'>_SMOKE</p>
                    </div>
                    <div>
                        <button className='contact-seller'>CONTACT</button>
                    </div>
                </div>
                <p className='seller-text'>Hi, I'm Smoke!I've always been passionate about video games, especially League of Legends. I started at the end of S4, reaching Master elo in S10 as support</p>
            </div>
        </div>
    );
}

export default CoachDescription;