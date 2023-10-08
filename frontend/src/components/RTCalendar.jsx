import React, { memo } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import "../styles/calendar.scss"

// -------------------------------------------------------
// Real Time Calendar component
// -------------------------------------------------------
const RTCalendar = (props) => {
  const { isLoading, calendarEvents } = props

  RTCalendar.propTypes = {
    isLoading: PropTypes.bool,
    calendarEvents: PropTypes.array,
  }

  console.log(calendarEvents)

  /* <div className="thead">
        <div className="tr">
          <div className="th">Time</div>
          <div className="th">Summary</div>
        </div>
      </div> */

  return !isLoading ? (
    <div className="table">
      {calendarEvents.map((event, index) =>
        index === 0 ? (
          <div key={index}>
            <div className="caption">
              {"Calendar Events for Today: "}
              {moment.utc(event.start.dateTime).format("ddd  DD/MM/YYYY")}
            </div>
            <div className="tbody">
              <div className="eventtime">
                {moment.utc(event.start.dateTime).format("LT")}
              </div>
              <div className="eventsummary">{event.summary}</div>
            </div>
          </div>
        ) : (
          <div key={index}>
            <div className="tbody">
              <div className="eventtime">
                {moment.utc(event.start.dateTime).format("LT")}
              </div>
              <div className="eventsummary">{event.summary}</div>
            </div>
          </div>
        )
      )}
    </div>
  ) : null
}

export default memo(RTCalendar)
