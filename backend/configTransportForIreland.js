var config = {
  agencies: [
    {
      agency_key: "Transport For Ireland",
      path: "/Users/briansmith/Documents/GTD/golf-3/backend/gtfs_data/TransportForIreland",
      url: "https://www.transportforireland.ie/transitData/Data/GTFS_Realtime.zip",
      realtimeUrls: [
        "https://api.nationaltransport.ie/gtfsr/v2/gtfsr",
        "https://api.nationaltransport.ie/gtfsr/v2/Vehicles",
        "https://api.nationaltransport.ie/gtfsr/v2/TripUpdates",
      ],
      realtimeHeaders: {
        "Cache-Control": "no-cache",
        "x-api-key": "80d8d0ad2a844dd2a6dcc4c8ed702f8d",
      },
    },
  ],
  verbose: true,
  sqlitePath:
    "/Users/briansmith/Documents/GTD/golf-3/backend/gtfs_data/TransportForIreland/gtfs.db",
  exportPath:
    "/Users/briansmith/Documents/GTD/golf-3/backend/gtfs_data/TransportForIreland/",
  tempFile: "/Users/briansmith/Desktop/GTFS_Realtime.zip",
}

export default config
