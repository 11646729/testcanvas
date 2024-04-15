var config = {
  agencies: [
    {
      agency_key: "Transport For Ireland",
      path: "/Users/briansmith/Documents/GTD/golf-3/backend/gtfs_data/TransportForIreland",
      url: "https://www.transportforireland.ie/transitData/Data/GTFS_Realtime.zip",
      realtimeUrls: "https://api.nationaltransport.ie/gtfsr/v2/gtfsr",
    },
  ],
  // realtimeUrls: "https://api.nationaltransport.ie/gtfsr/v2/gtfsr",
  verbose: true,
  sqlitePath:
    "/Users/briansmith/Documents/GTD/golf-3/backend/gtfs_data/TransportForIreland/gtfs.db",
  exportPath:
    "/Users/briansmith/Documents/GTD/golf-3/backend/gtfs_data/TransportForIreland/",
  tempFile: "/Users/briansmith/Desktop/GTFS_Realtime.zip",
}

export default config
