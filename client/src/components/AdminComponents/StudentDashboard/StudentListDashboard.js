import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Box } from "@mui/material";

function StudentListDashboard() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 50,
    maxColumns: 8,
  });

  return (
    <Box sx={{ width: "100%", height: "50vh" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid {...data} />
        </div>
      </div>
    </Box>
  );
}

export default StudentListDashboard;
