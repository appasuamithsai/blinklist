import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

let customStyle = makeStyles({
  addToLibBtn: {
    color: "#0365F2",
    width: "100%",
    textTransform: "none",
    paddingTop: "14px",
    paddingBottom: "20px",
    fontSize: "16px",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#0365F2",
      color: "#FFFFFF",
    },
  },
  authorNameTypography: {
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 500,
    color: "#6D787E",
  },
  avatarLogin: {
    bgcolor: "#69A6E3",
  },
  bannerImage: {
    border: "none",
    boxShadow: "none",
    height: "230px",
    width: "250px",
    backgroundColor: "#F1F6F4",
    marginTop: "17px",
    marginBottom: "17px",
    marginLeft: "112px",
  },
  bannerOne: {
    fontWeight: "700",
    fontSize: "36px",
    color: "#03314B",
  },
  bannerTwo: {
    fontWeight: "400",
    fontSize: "18px",
    color: "#6D787E",
  },
  blinkCard: {
    border: "none",
    boxShadow: "none",
  },
  bookNote: {
    fontSize: "20px",
    fontWeight: 400,
    color: "#03314B",
  },
  finishReading: {
    fontWeight: 500,
    fontSize: "16px",
    color: "#03314B",
    backgroundColor: "#2CE080",
    textTransform: "none",
    borderColor: "none",
  },
  sendToKindle: {
    fontSize: "16px",
    fontWeight: 400,
    color: "#6D787E",
    textTransform: "none",
  },
  readNow: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#22C870",
    borderColor: "#111",
    textTransform: "none",
  },
  readTimeTopography: {
    alignItems: "center",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 400,
    color: "#6D787E",
  },
  bookTitle: {
    fontSize: "36px",
    fontWeight: 700,
    color: "#03314B",
  },
  keyIdeas: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#03314B",
    marginTop: "60px",
    marginLeft: "495px",
  },
  bookTitleOne: {
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: 700,
    marginLeft: "16px",
    marginTop: "23px",
  },
  exploreBtn: {
    fontSize: "16px",
    padding: "none",
    textTransform: "none",
    fontWeight: 500,
    color: "#03314B",
    "&:hover": {
      borderBottom: "3px solid #2CE080",
      borderRadius: "0px",
      background: "none",
    },
  },
  buttons: {
    textTransform: "none",
    color: "#6D787E",
    fontWeight: "400",
    fontStyle: "Normal",
    fontSize: "16px",
    "&:hover": {
      color: "#0365F2",
    },
  },
  footerCopyRight: {
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 400,
    margin: " 16px 0px 0px 60px",
    color: "#6D787E",
  },
  keyBoardArrow: {
    backgroundBlendMode: "#042330",
  },
  footerHighlight: {
    fontStyle: "normal",
    fontSize: "24px",
    fontWeight: 500,
    color: "#0365F2",
  },
  navHead: {
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 700,
    color: "#03314B",
  },
  navItem: {
    width: "214px",
    marginTop: "16px",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 400,
    color: "#6D787E",
  },
  readAgain: {
    color: "#0365F2",
    width: "100%",
    textTransform: "none",
    paddingTop: "14px",
    paddingBottom: "10px",
    fontSize: "16px",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#0365F2",
      color: "#FFFFFF",
      borderRadius: "0px",
    },
  },
  head: {
    marginTop: "59px",
    marginLeft: "485px",
    fontSize: "24px",
    fontWeight: 700,
    color: "#03314B",
  },
  more: {
    position: "relative",
    left: "80.75%",
  },
  myLibrary: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#03314B",
  },
  myLibraryHead: {
    marginTop: "59px",
    marginLeft: "485px",
    fontSize: "36px",
    fontWeight: 700,
    color: "#03314B",
  },
  cardStyle: {
    maxWidth: "284px",
    maxHeight: "490px",
    borderRadius: "8px",
  },
  avatarDrop: {
    marginBottom: "23px",
    marginTop: "29px",
    marginLeft: "292px",
  },
  avatarNavDown: {
    marginTop: "7px",
  },
  mainBanner: {
    backgroundColor: "#F1F6F4",
    marginLeft: "485px",
    width: "920px",
    marginTop: "32px",
  },
  mainBannerItem: {
    margin: "45px",
  },
  mainBannerImage: {
    margin: "20px",
  },
  tabStyle: {
    textTransform: "none",
    fontSize: 18,
    fontWeight: 700,
    textAlign: "left",
    width: "auto",
    paddingRight: "150px",
    paddingBottom: "16px",
    margin: "8px 0px",
  },
  activeTab: {
    textTransform: "none",
    textAlign: "left",
    fontSize: 18,
    fontWeight: 400,
    width: "auto",
    paddingRight: "150px",
    paddingBottom: "16px",
    position: "relative",
    left: 0,
  },
  bookDetalisTabsOne: {
    marginLeft: "493px",
    marginTop: "40px",
  },
  bookDetalisTabsTwo: {
    padding: "0px",
    marginTop: "20px",
    marginLeft: "493px",
  },
  bookDetalisTabsTypo: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#03314B",
    width: "600px",
  },
  exploreBoxOne: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  exploreBoxTwo: {
    paddingLeft: "485px",
    backgroundColor: "#F1F6F4",
    paddingBottom: "15px",
  },
  exploreBoxThree: {
    backgroundColor: "#111",
    height: "100%",
    width: "100%",
    opacity: "0.4",
  },
  exploreDiv: {
    marginRight: "170px",
  },
  exploreGrid: {
    paddingTop: "10px",
  },
  exploreHeadTypoOne: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#116BE9",
  },
  exploreHeadTypoTwo: {
    fontWeight: "500",
    fontSize: "16px",
    color: " #6D787E",
  },
  blinkHighlightGridOne: {
    width: "378px",
    height: "128px",
  },
  blinkHighlightGridTwo: {
    height: "26px",
    width: "124px",
  },
  blinkHighlightGridThree: {
    marginTop: "32px",
  },
  finishedBar: {
    width: "295px",
    height: "15px",
    position: "relative",
    background: "#DFE8F6",
    boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
  },
  currentBar: {
    width: "295px",
    height: "15px",
    position: "relative",
    background: "#F1F6F4",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
  },
  footerMainGridOne: {
    backgroundColor: "#F1F6F4",
    marginTop: "111px",
  },
  footerMainGridTwo: {
    marginTop: "38px",
  },
  footerMainGridThree: {
    marginLeft: "102px",
  },
  footerMainGridFour: {
    marginLeft: "390px",
    marginTop: "48px",
    marginBottom: "38px",
  },
  cardGridOne: {
    margin: " 16px 0px 0px 16px",
  },
  cardGridTwo: {
    marginLeft: "17.67px",
    marginTop: "17.67px",
  },
  bookDetailsbox: {
    marginTop: "40px",
  },
  bookDetailsGrid: { marginTop: "83px" },
  cardAddGridOne: {
    marginTop: "25px",
    marginLeft: "465px",
    width: "1000px",
  },
  cardAddGridTwo: {
    marginTop: "10px",
  },
  cardMuiGrid: {
    width: "1000px",
  },
  cardMuiCard: {
    borderRadius: "8px",
  },
  headerLeftGridMain: {
    columnGap: "42px",
    marginTop: "30px",
    marginBottom: "30px",
  },
  headerLeftGrid: {
    marginTop: "6px",
  },
  textField: {
    width: "658px",
    marginBottom: "0px",
    marginTop: "58px",
    color: "#6D787E",
    padding: "16px",
    fontWeight: "700",
    fontSize: "24px",
    marginLeft: "475px",
  },
  tabs: {
    marginLeft: "475px",
    marginTop: "60px",
  },
  tabPanel: {
    marginLeft: "450px",
    marginRight: "259px",
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
  },
});
export default customStyle;
