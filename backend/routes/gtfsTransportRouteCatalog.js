import express from "express"
import {
  index,
  importStaticGtfsToSQLite,
  updateRealtimeGtfsToSQLite,
  getAllAgencies,
  getRoutesForSingleAgency,
  getShapesForSingleRoute,
  getStopsForSingleRoute,
} from "../controllers/gtfsTransportController.js"

var gtfsRouter = express.Router()

// -------------------------------------------------------
// Bus Routes
// -------------------------------------------------------
// GET catalogue home page
gtfsRouter.get("/", index)

// POST all Static GTFS data into the SQL database
gtfsRouter.post("/importStaticGTFSData", importStaticGtfsToSQLite)

// POST all Realtime GTFS data into the SQL database
gtfsRouter.post("/updateRealtimeGTFSData", updateRealtimeGtfsToSQLite)

// GET all Transport Agencies
gtfsRouter.get("/transportagencies", getAllAgencies)

//  GET Transport Routes for one Transport Agency
gtfsRouter.get("/routesforsingleagency", getRoutesForSingleAgency)

//  GET Shapes for one Transport Route
gtfsRouter.get("/shapesforsingleroute", getShapesForSingleRoute)

// GET Stops for one Transport Route
gtfsRouter.get("/stopsforsingleroute", getStopsForSingleRoute)

export default gtfsRouter
