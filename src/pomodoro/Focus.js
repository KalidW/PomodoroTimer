//  RESPONSIBILITY - Display the focusing plus and minus button area
import React from "react";
import minutesToDuration from "../utils/duration"
// need current focus duration time 
//need decreasing duration, No less then 5 min
// need increasing duration , No more then 60 min
// need disable buttons during sessions, Cant increase or decrease during focus or break
function Focus({focusDuration, focusIncrease, focusDecrease, disableControl }){
    
    return (
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(focusDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={focusDecrease}
                disabled ={disableControl}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={focusIncrease}
                disabled = {disableControl}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
    )
}

export default Focus