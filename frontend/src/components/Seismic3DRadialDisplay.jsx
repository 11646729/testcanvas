import React, { useEffect, useState, memo } from "react"
import { Stage, Layer } from "react-konva"
import DrawChartBox from "../components/DrawChartBox"
import DrawPlotTitle from "../components/DrawPlotTitle"
import DrawTopTitle from "./DrawTopTitle"
import DrawBottomTitle from "./DrawBottomTitle"
import DrawLeftTitle from "./DrawLeftTitle"
import DrawRightTitle from "./DrawRightTitle"
import DrawGraphPlotArea from "./DrawGraphPlotArea"
import DrawLegendArea from "./DrawLegendArea"
import DrawTopAxis from "./DrawTopAxis"
import DrawBottomAxis from "./DrawBottomAxis"
import DrawLeftAxis from "./DrawLeftAxis"
import DrawRightAxis from "./DrawRightAxis"
import DrawLegendTitle from "./DrawLegendTitle"
import DrawRadialLinesAndCircles from "./DrawRadialLinesAndCircles"
import SeismicDesignDrawer from "./SeismicDesignDrawer"

import {
  computeScreenEdgeRect,
  computeInsideMarginsRect,
  computeGraphPlotAreaRect,
  computeInsidePlotTitlesRect,
  computeTopTitlesRect,
  computeBottomTitlesRect,
  computeLeftTitlesRect,
  computeRightTitlesRect,
  computeLegendAreaRect,
} from "../functionHandlers/seismic3DRadialDisplayFunctions"

const Seismic3DRadialDisplay = () => {
  // -------------------------------------------------------
  // Prepare rectangles for titles, axes & legend
  // -------------------------------------------------------
  // Hook is initialised with width & height values
  const [screenEdgeRect, setScreenRect] = useState(computeScreenEdgeRect())
  const [insideMarginsRect, setInsideMarginsRect] = useState(
    computeInsideMarginsRect(screenEdgeRect)
  )
  const [graphPlotAreaRect, setGraphPlotAreaRect] = useState(
    computeGraphPlotAreaRect(insideMarginsRect)
  )
  const [insidePlotTitleRect, setInsidePlotTitleRect] = useState(
    computeInsidePlotTitlesRect(insideMarginsRect)
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
  const [legendAreaRect, setLegendAreaRect] = useState(
    computeLegendAreaRect(insideMarginsRect, rightTitleRect)
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
      setLegendAreaRect(
        computeLegendAreaRect(insideMarginsRect, rightTitleRect)
      )
    }

    window.addEventListener("resize", checkSize)
    return () => window.removeEventListener("resize", checkSize)
  }, [screenEdgeRect, insideMarginsRect, graphPlotAreaRect, rightTitleRect])

  // TODO
  // Check DrawRadialLinesAndCircles exact position for Labels
  // Redo Axis & Title Widths to be a % of width & height
  // Redo Font sizes to be a % of width & height

  return (
    <div>
      <SeismicDesignDrawer />
      <Stage width={screenEdgeRect.right} height={screenEdgeRect.bottom}>
        <Layer>
          <DrawChartBox rect={insideMarginsRect} />
          <DrawPlotTitle
            rect={insidePlotTitleRect}
            titleText={
              process.env.REACT_APP_GEOPHONEARRAY_M3DRADIALPLOTTITLETEXT
            }
          />
          <DrawGraphPlotArea rect={graphPlotAreaRect} />
          <DrawTopTitle rect={topTitleRect} />
          <DrawBottomTitle rect={bottomTitleRect} />
          <DrawLeftTitle rect={leftTitleRect} />
          <DrawRightTitle rect={rightTitleRect} />
          <DrawTopAxis rect={graphPlotAreaRect} />
          <DrawBottomAxis rect={graphPlotAreaRect} />
          <DrawLeftAxis rect={graphPlotAreaRect} />
          <DrawRightAxis rect={graphPlotAreaRect} />
          <DrawLegendTitle rect={legendAreaRect} />
          <DrawLegendArea rect={legendAreaRect} />
          <DrawRadialLinesAndCircles rect={graphPlotAreaRect} />
        </Layer>
      </Stage>
    </div>
  )
}

export default memo(Seismic3DRadialDisplay)
