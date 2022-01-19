import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import MainReading from "../../template/reading-books/MainReading";
import MainFinished from "../../template/finished-books//MainFinished";
const useStyles = makeStyles({
  tabStyle: {
    textTransform: "none",
    fontSize: 18,
    fontWeight: 700,
    textAlign:'left',
    width: 'auto',
    paddingRight:'150px',
    margin: "8px 0px",
  },
  activeTab: {
    textTransform: "none",
    textAlign:'left',
    fontSize: 18,
    fontWeight: 400,
    width: 'auto',
    paddingRight:'150px',
    position: "relative",
    left: 0,
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
  },
});



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
  const classes = useStyles();
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
          sx={{ marginLeft: "445px", marginTop: "60px" }}
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
        <TabPanel value="1" sx={{
    marginLeft: "420px", marginRight: "259px" }}>
          <MainReading handleReadAgain={props.handleReadAgain} handleFinish={props.handleFinish} currentReading={props.currentReading}/>
        </TabPanel>
        <TabPanel value="2"  sx={{ 
    marginLeft: "420px", marginRight: "259px" }}>
          <MainFinished handleReadAgain={props.handleReadAgain} handleFinish={props.handleFinish} finishedReading={props.finishedReading}/>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
};

export default ReadingTabs;
