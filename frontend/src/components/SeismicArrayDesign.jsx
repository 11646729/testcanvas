import React, { useEffect, useState, memo } from "react"
import { Stage, Layer } from "react-konva"
import SeismicDesignDrawer from "../components/SeismicDesignDrawer"
import DrawChartBox from "../components/DrawChartBox"
import DrawPlotTitle from "../components/DrawPlotTitle"
import DrawTopTitle from "../components/DrawTopTitle"
import DrawBottomTitle from "../components/DrawBottomTitle"
import DrawLeftTitle from "../components/DrawLeftTitle"
import DrawRightTitle from "../components/DrawRightTitle"
import DrawGraphPlotArea from "../components/DrawGraphPlotArea"

import {
  computeScreenEdgeRect,
  computeInsideMarginsRect,
  computeGraphPlotAreaRect,
  computeInsidePlotTitlesRect,
  computeTopTitlesRect,
  computeBottomTitlesRect,
  computeLeftTitlesRect,
  computeRightTitlesRect,
} from "../functionHandlers/seismicDisplayFunctions"

const SeismicArrayDesign = () => {
  // -------------------------------------------------------
  // Prepare rectangles for titles, axes & legend
  // -------------------------------------------------------
  // Hook is initialised with width & height values
  const [screenEdgeRect, setScreenRect] = useState(computeScreenEdgeRect())
  const [insideMarginsRect, setInsideMarginsRect] = useState(
    computeInsideMarginsRect(screenEdgeRect)
  )
  const [insidePlotTitleRect, setInsidePlotTitleRect] = useState(
    computeInsidePlotTitlesRect(insideMarginsRect)
  )
  const [graphPlotAreaRect, setGraphPlotAreaRect] = useState(
    computeGraphPlotAreaRect(insideMarginsRect)
  )
  const [topTitleRect, setTopTitleRect] = useState(
    computeTopTitlesRect(graphPlotAreaRect)
  )
  const [bottomTitleRect, setBottomTitleRect] = useState(
    computeBottomTitlesRect(graphPlotAreaRect)
  )
  const [leftTitleRect, setLeftTitleRect] = useState(
    computeLeftTitlesRect(graphPlotAreaRect)
  )
  const [rightTitleRect, setRightTitleRect] = useState(
    computeRightTitlesRect(graphPlotAreaRect)
  )

  useEffect(() => {
    const checkSize = () => {
      setScreenRect(computeScreenEdgeRect())
      setInsideMarginsRect(computeInsideMarginsRect(screenEdgeRect))
      setGraphPlotAreaRect(computeGraphPlotAreaRect(insideMarginsRect))
      setInsidePlotTitleRect(
        computeInsidePlotTitlesRect(insideMarginsRect, graphPlotAreaRect)
      )
      setTopTitleRect(computeTopTitlesRect(graphPlotAreaRect))
      setBottomTitleRect(computeBottomTitlesRect(graphPlotAreaRect))
      setLeftTitleRect(computeLeftTitlesRect(graphPlotAreaRect))
      setRightTitleRect(computeRightTitlesRect(graphPlotAreaRect))
    }

    window.addEventListener("resize", checkSize)
    return () => window.removeEventListener("resize", checkSize)
  }, [screenEdgeRect, insideMarginsRect, graphPlotAreaRect, rightTitleRect])

  return (
    <div>
      <SeismicDesignDrawer />
      <Stage width={screenEdgeRect.right} height={screenEdgeRect.bottom}>
        <Layer>
          <DrawChartBox rect={insideMarginsRect} />
          <DrawPlotTitle
            rect={insidePlotTitleRect}
            titleText={process.env.REACT_APP_GEOPHONEARRAY_ARRAYDESIGNPLOTTITLE}
          />
          <DrawGraphPlotArea rect={graphPlotAreaRect} />
          <DrawTopTitle
            rect={topTitleRect}
            titleText={
              process.env.REACT_APP_GEOPHONEARRAY_ARRAYDESIGNTOPTITLETEXT
            }
          />
          <DrawBottomTitle
            rect={bottomTitleRect}
            titleText={
              process.env.REACT_APP_GEOPHONEARRAY_ARRAYDESIGNBOTTOMTITLETEXT
            }
          />
          <DrawLeftTitle
            rect={leftTitleRect}
            titleText={
              process.env.REACT_APP_GEOPHONEARRAY_ARRAYDESIGNTOPTITLETEXT
            }
          />
          <DrawRightTitle
            rect={rightTitleRect}
            titleText={
              process.env.REACT_APP_GEOPHONEARRAY_ARRAYDESIGNRIGHTTITLETEXT
            }
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default memo(SeismicArrayDesign)
