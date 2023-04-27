import React, { memo } from "react"
import PropTypes from "prop-types"
import { Group, Rect } from "react-konva"

const DrawPlotTitle = (props) => {
  const { rect } = props

  if (!rect) return

  DrawPlotTitle.propTypes = {
    rect: PropTypes.object,
  }

  return (
    <Group>
      <Rect
        x={rect.left}
        y={rect.top}
        width={rect.right}
        height={rect.bottom - rect.top}
        stroke={process.env.REACT_APP_GEOPHONEARRAY_CHARTOUTLINECOLOR}
        strokeWidth={parseInt(
          process.env.REACT_APP_GEOPHONEARRAY_CHARTOUTLINEWIDTH
        )}
        fill="lightgreen"
      />
    </Group>
  )
}

export default memo(DrawPlotTitle)
