import React from "react";
import "../summary/summary.css"
import Description from "../../components/Description/Description";
import Payment from "@/components/Payment/payment";
import Reviews from "@/components/Reviews/reviews";
import KeepInMind from "@/components/Keep-in-mind/KeepInMind";
import Questions from "@/components/Questions/questions";

const Summary: React.FC = () => {

    return (
        <>
            <div className="main-container">
                <div className="container">
                    <div className="col-1">
                        <img className="div-img" src="/div.png" />
                        <Description name="Claudio aka Smoke"
                            age={25}
                            game="League of Legends"
                            experience={3}
                            bestPicks={["Alistar", "Thresh", "Blitz", "Renata", "Kalista"]}
                            sessionPlan={["Wave Management", "Spacing", "Trading", "General Macro", "Vision Control", "Builds", "Matchups"]}
                            sessionDetails={[
                                "Pre-game discussion - skill, desired rank (w/ op.gg)",
                                "Live game commentating",
                                "VOD Review Analysis",
                                "Post game talk"
                            ]}></Description>
                        <Reviews></Reviews>

                    </div>

                    <div className="col-2">
                        <Payment></Payment>
                    </div>
                </div>
                <div className="keep-in-mind">
                    <KeepInMind></KeepInMind>
                    <Questions></Questions>
                </div>
            </div>
        </>
    )

}

export default Summary;