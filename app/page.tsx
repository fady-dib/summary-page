"use client"
import './page.module.css';

import Description from '@/components/Description/Description'

const Summary: React.FC = () => {

  return (
      <div className="container-1">
          <div className="col-1">
              <img className="div-img" src="/div.png"/>
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

          </div>
      </div>
  )

}

export default Summary;
