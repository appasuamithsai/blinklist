import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React,{useState} from "react";
import customStyle, { theme } from "../../../Theme";




const BookDetailsTabs = () => {

  const [bool, setbool] = useState(false);
  const classes = customStyle();
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
          onChange={handleChange}
          className={classes.bookDetalisTabsOne}
        >
          <Tab label="Synopsis" value="1"  className={bool === true ? classes.activeTab : classes.tabStyle} />

          <Tab label="Who is it for?" value="2"   className={bool === true ? classes.activeTab : classes.tabStyle} />
          <Tab label="About the author" value="3"  className={bool === true ? classes.activeTab : classes.tabStyle} />
        </Tabs>
        <TabPanel value="1" className={classes.bookDetalisTabsTwo}>
          <Typography
            variant="body2"
            className={classes.bookDetalisTabsTypo}
          >
            Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
          </Typography>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
};

export default BookDetailsTabs;
