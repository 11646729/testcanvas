// -------------------------------------------------------
// Function to compute ScreenEdgeRect - translated from C++ code
// -------------------------------------------------------
export const computeScreenEdgeRect = () => {
  // let screenEdgeRect = {
  return {
    top: 0,
    bottom:
      window.innerHeight -
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_SIZEADJUSTMENT),
    left: 0,
    right:
      window.innerWidth -
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_SIZEADJUSTMENT),
  }

  // return screenEdgeRect
}

// -------------------------------------------------------
// Function to compute InsideMarginsRect - translated from C++ code
// -------------------------------------------------------
export const computeInsideMarginsRect = (ScreenEdgeRect) => {
  let insideMarginsRect = {
    top:
      ScreenEdgeRect.top +
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_MARGINWIDTH),
    bottom:
      ScreenEdgeRect.bottom -
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_MARGINWIDTH),
    left:
      ScreenEdgeRect.left +
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_MARGINWIDTH),
    right:
      ScreenEdgeRect.right -
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_MARGINWIDTH),
  }

  getGraphPlotRect(insideMarginsRect)

  return insideMarginsRect
}

// -------------------------------------------------------
// Function to fetch Widths of various Title, AxisRect & Legend rectangles - translated from C++ code
// -------------------------------------------------------
const getPlotTitleWidth = () => {
  return process.env.REACT_APP_GEOPHONEARRAY_DRAWPLOTTITLE === "true"
    ? parseInt(process.env.REACT_APP_GEOPHONEARRAY_PLOTTITLEWIDTH)
    : 0
}

const getTopTitleWidth = () => {
  return process.env.REACT_APP_GEOPHONEARRAY_DRAWTOPTITLE === "true"
    ? parseInt(process.env.REACT_APP_GEOPHONEARRAY_TOPTITLEWIDTH)
    : 0
}

const getBottomTitleWidth = () => {
  return process.env.REACT_APP_GEOPHONEARRAY_DRAWBOTTOMTITLE === "true"
    ? parseInt(process.env.REACT_APP_GEOPHONEARRAY_BOTTOMTITLEWIDTH)
    : 0
}

const getLeftTitleWidth = () => {
  return process.env.REACT_APP_GEOPHONEARRAY_DRAWLEFTTITLE === "true"
    ? parseInt(process.env.REACT_APP_GEOPHONEARRAY_LEFTTITLEWIDTH)
    : 0
}

const getRightTitleWidth = () => {
  return process.env.REACT_APP_GEOPHONEARRAY_DRAWRIGHTTITLE === "true"
    ? parseInt(process.env.REACT_APP_GEOPHONEARRAY_RIGHTTITLEWIDTH)
    : 0
}

const getTopAxisWidth = () => {
  return process.env.REACT_APP_GEOPHONEARRAY_DRAWTOPAXIS === "true"
    ? parseInt(process.env.REACT_APP_GEOPHONEARRAY_TOPAXISWIDTH)
    : 0
}

const getBottomAxisWidth = () => {
  return process.env.REACT_APP_GEOPHONEARRAY_DRAWBOTTOMAXIS === "true"
    ? parseInt(process.env.REACT_APP_GEOPHONEARRAY_BOTTOMAXISWIDTH)
    : 0
}

const getLeftAxisWidth = () => {
  return process.env.REACT_APP_GEOPHONEARRAY_DRAWLEFTAXIS === "true"
    ? parseInt(process.env.REACT_APP_GEOPHONEARRAY_LEFTAXISWIDTH)
    : 0
}

const getRightAxisWidth = () => {
  return process.env.REACT_APP_GEOPHONEARRAY_DRAWRIGHTAXIS === "true"
    ? parseInt(process.env.REACT_APP_GEOPHONEARRAY_RIGHTAXISWIDTH)
    : 0
}

const getLegendWidth = () => {
  return process.env.REACT_APP_GEOPHONEARRAY_DRAWLEGEND === "true"
    ? parseInt(process.env.REACT_APP_GEOPHONEARRAY_LEGENDWIDTH)
    : 0
}

const getGraphPlotRect = (insideMarginsRect) => {
  // Firstly compute GraphPlot Height & Width

  const tempGraphPlotHeight =
    insideMarginsRect.bottom -
    insideMarginsRect.top -
    getPlotTitleWidth() -
    getBottomTitleWidth() -
    getTopTitleWidth() -
    getBottomAxisWidth() -
    getTopAxisWidth()

  const tempGraphPlotWidth =
    insideMarginsRect.right -
    insideMarginsRect.left -
    getRightTitleWidth() -
    getLeftTitleWidth() -
    getRightAxisWidth() -
    getLeftAxisWidth() -
    getLegendWidth()

  const tempGraphPlotTop =
    insideMarginsRect.top +
    getPlotTitleWidth() +
    getTopTitleWidth() +
    getTopAxisWidth()

  let insideGraphPlotRect = null

  if (tempGraphPlotHeight <= tempGraphPlotWidth) {
    const spaceBeforeTitles = Math.round(
      (insideMarginsRect.right -
        insideMarginsRect.left -
        getLeftTitleWidth() -
        getRightTitleWidth() -
        getLeftAxisWidth() -
        getRightAxisWidth() -
        tempGraphPlotHeight) /
        2
    )

    // Portrait mode
    insideGraphPlotRect = {
      top: tempGraphPlotTop,
      bottom:
        insideMarginsRect.bottom - getBottomTitleWidth() - getBottomAxisWidth(),
      left: Math.round(
        insideMarginsRect.left +
          spaceBeforeTitles +
          getLeftTitleWidth() +
          getLeftAxisWidth()
      ),
      right:
        insideMarginsRect.right -
        spaceBeforeTitles -
        getRightTitleWidth() -
        getRightAxisWidth(),
    }
  } else {
    // Landscape mode
    // TODO
    insideGraphPlotRect = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }
  }

  return insideGraphPlotRect
}

// -------------------------------------------------------
// Function to compute InsidePlotTitlesRect - translated from C++ code & refactored
// -------------------------------------------------------
export const computeInsidePlotTitlesRect = (insideMarginsRect) => {
  return {
    top: insideMarginsRect.top,
    bottom: insideMarginsRect.top + getPlotTitleWidth(),
    left: insideMarginsRect.left,
    right: insideMarginsRect.right,
  }
}

// -------------------------------------------------------
// Function to compute TopTitlesRect - translated from C++ code & refactored
// -------------------------------------------------------
export const computeTopTitlesRect = (insideMarginsRect) => {
  return {
    top: insideMarginsRect.top + getPlotTitleWidth(),
    bottom: insideMarginsRect.top + getPlotTitleWidth() + getTopTitleWidth(),
    left: insideMarginsRect.left,
    right: insideMarginsRect.right - getLegendWidth(),
  }
}

// -------------------------------------------------------
// Function to compute BottomTitlesRect - translated from C++ code & refactored
// -------------------------------------------------------
export const computeBottomTitlesRect = (insideMarginsRect) => {
  return {
    top: insideMarginsRect.bottom - getBottomTitleWidth(),
    bottom: insideMarginsRect.bottom,
    left: insideMarginsRect.left,
    right: insideMarginsRect.right - getLegendWidth(),
  }
}

// -------------------------------------------------------
// Function to compute LeftTitlesRect - translated from C++ code & refactored
// -------------------------------------------------------
export const computeLeftTitlesRect = (
  insidePlotTitleRect,
  insideMarginsRect
) => {
  const tempHeight =
    insideMarginsRect.bottom -
    getBottomTitleWidth() -
    parseInt(process.env.REACT_APP_GEOPHONEARRAY_BOTTOMAXISWIDTH) -
    (insidePlotTitleRect.bottom +
      getTopTitleWidth() +
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_TOPAXISWIDTH))

  const tempWidth =
    insideMarginsRect.right -
    getRightTitleWidth() -
    getLegendWidth() -
    parseInt(process.env.REACT_APP_GEOPHONEARRAY_RIGHTAXISWIDTH) -
    (insideMarginsRect.left +
      getLeftTitleWidth() +
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_LEFTAXISWIDTH))

  return {
    top: insidePlotTitleRect.bottom + getTopTitleWidth(),
    bottom: insideMarginsRect.bottom - getBottomTitleWidth(),
    left: insideMarginsRect.left + (tempWidth - tempHeight) / 2,
    right:
      insideMarginsRect.left +
      getLeftTitleWidth() +
      (tempWidth - tempHeight) / 2,
  }
}

// -------------------------------------------------------
// Function to compute RightTitlesRect - translated from C++ code & refactored
// -------------------------------------------------------
export const computeRightTitlesRect = (
  insidePlotTitleRect,
  insideMarginsRect
) => {
  const tempHeight =
    insideMarginsRect.bottom -
    getBottomTitleWidth() -
    parseInt(process.env.REACT_APP_GEOPHONEARRAY_BOTTOMAXISWIDTH) -
    insidePlotTitleRect.bottom +
    getTopTitleWidth() +
    parseInt(process.env.REACT_APP_GEOPHONEARRAY_TOPAXISWIDTH)

  const tempWidth =
    insideMarginsRect.right -
    getRightTitleWidth() -
    getLegendWidth() -
    parseInt(process.env.REACT_APP_GEOPHONEARRAY_RIGHTAXISWIDTH) -
    (insideMarginsRect.left +
      getLeftTitleWidth() +
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_LEFTAXISWIDTH))

  return {
    top: insidePlotTitleRect.bottom + getTopTitleWidth(),
    bottom: insideMarginsRect.bottom - getBottomTitleWidth(),
    left:
      insideMarginsRect.right -
      getRightTitleWidth() -
      getLegendWidth() -
      (tempWidth - tempHeight) / 2,
    right:
      insideMarginsRect.right - getLegendWidth() - (tempWidth - tempHeight) / 2,
  }
}

// -------------------------------------------------------
// Function to compute GraphPlotAreaRect - translated from C++ code & refactored
// -------------------------------------------------------
export const computeGraphPlotAreaRect = (
  insidePlotTitleRect,
  insideMarginsRect
) => {
  const tempHeight =
    insideMarginsRect.bottom -
    getBottomTitleWidth() -
    parseInt(process.env.REACT_APP_GEOPHONEARRAY_BOTTOMAXISWIDTH) -
    insidePlotTitleRect.bottom +
    getTopTitleWidth() +
    parseInt(process.env.REACT_APP_GEOPHONEARRAY_TOPAXISWIDTH)

  const tempWidth =
    insideMarginsRect.right -
    getRightTitleWidth() -
    getLegendWidth() -
    parseInt(process.env.REACT_APP_GEOPHONEARRAY_RIGHTAXISWIDTH) -
    (insideMarginsRect.left +
      getLeftTitleWidth() +
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_LEFTAXISWIDTH))

  return {
    top:
      insidePlotTitleRect.bottom +
      getTopTitleWidth() +
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_TOPAXISWIDTH),
    bottom:
      insideMarginsRect.bottom -
      getBottomTitleWidth() -
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_BOTTOMAXISWIDTH),
    left:
      insideMarginsRect.left +
      getLeftTitleWidth() +
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_LEFTAXISWIDTH) +
      (tempWidth - tempHeight) / 2,
    right:
      insideMarginsRect.right -
      getRightTitleWidth() -
      getLegendWidth() -
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_RIGHTAXISWIDTH) -
      (tempWidth - tempHeight) / 2,
  }
}

// -------------------------------------------------------
// Function to compute LegendAreaRect - translated from C++ code & refactored
// -------------------------------------------------------
export const computeLegendAreaRect = (
  insidePlotTitleRect,
  insideMarginsRect
) => {
  const tempHeight =
    insideMarginsRect.bottom -
    getBottomTitleWidth() -
    parseInt(process.env.REACT_APP_GEOPHONEARRAY_BOTTOMAXISWIDTH) -
    insidePlotTitleRect.bottom +
    getTopTitleWidth() +
    parseInt(process.env.REACT_APP_GEOPHONEARRAY_TOPAXISWIDTH)

  const tempWidth =
    insideMarginsRect.right -
    getRightTitleWidth() -
    getLegendWidth() -
    parseInt(process.env.REACT_APP_GEOPHONEARRAY_RIGHTAXISWIDTH) -
    (insideMarginsRect.left +
      getLeftTitleWidth() +
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_LEFTAXISWIDTH))

  return {
    top:
      insidePlotTitleRect.bottom +
      getTopTitleWidth() +
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_TOPAXISWIDTH),
    bottom:
      insideMarginsRect.bottom -
      getBottomTitleWidth() -
      parseInt(process.env.REACT_APP_GEOPHONEARRAY_BOTTOMAXISWIDTH),
    left:
      insideMarginsRect.right - getLegendWidth() - (tempWidth - tempHeight) / 2,
    right: insideMarginsRect.right,
  }
}

export { computeInsideMarginsRect as default }