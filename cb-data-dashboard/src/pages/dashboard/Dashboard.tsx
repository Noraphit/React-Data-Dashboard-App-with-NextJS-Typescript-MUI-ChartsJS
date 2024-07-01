import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import scss from './Dashboard.module.scss';
import DataRibbon from "@/components/DataRibbon";

const Dashboard = () => {
  return (
    <>
      <Box>
        <DataRibbon />
      </Box>
    </>
  );
};

export default Dashboard;