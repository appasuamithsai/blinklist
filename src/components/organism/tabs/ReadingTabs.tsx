import React, { useState } from "react";
import {  ThemeProvider } from "@mui/material/styles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import MainReading from "../../template/reading-books/MainReading";
import MainFinished from "../../template/finished-books//MainFinished";
import customStyle, { theme } from "../../../Theme";





interface Books {
  currentReading: {
    image: string;
    name: string;
    author: string;
    time: string;
    finished:boolean;
  }[];
  finishedReading: {
    image: string;
    name: string;
    author: string;
    time: string;
    finished:boolean;
  }[];
  handleReadAgain:(item:string)=>void;
  handleFinish:(item:string)=>void;
}



const ReadingTabs = (props:Books) => {
  const classes = customStyle();
  const [bool, setbool] = useState(false);
  const [value, setvalue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setvalue(newValue);
    setbool(!bool);
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Tabs
          value={value}
          className={classes.tabs}
          onChange={handleChange}
        >
          <Tab
            label="Currently reading"
            value="1"
            className={bool === true ? classes.activeTab : classes.tabStyle}
          />

          <Tab
            label="Finished"
            value="2"
            className={bool === false ? classes.activeTab : classes.tabStyle}
          />
        </Tabs>
        <TabPanel value="1" className={classes.tabPanel}>
          <MainReading handleReadAgain={props.handleReadAgain} handleFinish={props.handleFinish} currentReading={props.currentReading}/>
        </TabPanel>
        <TabPanel value="2" className={classes.tabPanel}>
          <MainFinished handleReadAgain={props.handleReadAgain} handleFinish={props.handleFinish} finishedReading={props.finishedReading}/>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
};

export default ReadingTabs;
