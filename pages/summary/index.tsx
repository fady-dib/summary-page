import React from "react";
import "../summary/summary.css"
import Description from "../../components/Description/Description";
import Payment from "@/components/payment/payment";

const Summary: React.FC = () => {

    return (
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

            </div>

            <div className="col-2">
                <Payment></Payment>
            </div>
        </div>
    )

}

export default Summary;