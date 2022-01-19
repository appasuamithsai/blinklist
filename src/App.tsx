import { useState } from "react";
import MyLibraryHeading from "./components/atoms/mylibrary/mylibrary-head/MyLibraryHeading";
import ReadingTabs from "./components/organism/tabs/ReadingTabs";
import FooterMain from "./components/molecule/footer/footer-main/FooterMain";
import ToolBarHeader from "./components/organism/header/toolbar-header/ToolBarHeader";
import ExploreMenu from "./components/molecule/explore-items/explore-grid/ExploreMenu";
import MainBanner from "./components/molecule/banner-items/main-banner/MainBanner";
import MainSearch from "./components/organism/main/MainSearch";
import Heading from "./components/atoms/headings/Heading";
import EnterprenurReading from "./components/template/enterprenur-books/EnterprenurReading";
import BookDetailsTabs from "./components/molecule/bookdetailstabs/BookDetailsTabs";
import BookDetailsGrid from "./components/organism/bookdetailsgrid/BookDetailsGrid";
import KeyIdeas from "./components/atoms/bookpagedetails/keyideas/KeyIdeas";
import book1 from "../src/components/atoms/assets/book1.png";
import book2 from "../src/components/atoms/assets/book2.png";
import book3 from "../src/components/atoms/assets/book3.png";
import book4 from "../src/components/atoms/assets/book4.png";
import book5 from "../src/components/atoms/assets/book5.png";
import book6 from "../src/components/atoms/assets/book6.png";
import book7 from "../src/components/atoms/assets/book7.png";
import book8 from "../src/components/atoms/assets/book8.png";
import book9 from "../src/components/atoms/assets/book9.png";
import bookimage from "../src/components/atoms/assets/bookimage.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

let readingBooks = [
  {
    image: bookimage,
    name: "Beyond Entrepreneurship 2.0",
    author: "Erica Keswin",
    time: "13-minute read",
    finished: false,
  },
  {
    image: book1,
    name: "Bring Your Human to Work",
    author: "Erica Keswin",
    time: "13-minute read",
    finished: false,
  },
  {
    image: book2,
    name: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    time: "15-minute read",
    finished: false,
  },
  {
    image: book3,
    name: `Doesn't Hurt to Ask`,
    author: "Trey Gowdy",
    time: "13-minute read",
    finished: false,
  },
  {
    image: book4,
    name: "The Fate of Food",
    author: "Amanda Little",
    time: "12-minute read",
    finished: false,
  },
  {
    image: book5,
    name: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    time: "13-minute read",
    finished: false,
  },
];

let finishedBooks = [
  {
    image: book6,
    name: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    finished: true,
  },
  {
    image: book7,
    name: "The Lonely Century",
    author: "Noreena Hertz",
    time: "15-minute read",
    finished: true,
  },
  {
    image: book8,
    name: "Eat Better, Feel Better",
    author: "Giada De Laurentiis",
    time: "13-minute read",
    finished: true,
  },
  {
    image: book9,
    name: "Dropshipping",
    author: "James Moore",
    time: "12-minute read",
    finished: true,
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [btn, setbtn] = useState(false);
  const [icon, seticon] = useState(false);
  const handleFinish = (item: string) => {
    if(item==="Beyond Entrepreneurship 2.0"){
          let temp;
          temp = readingBooks.find((e) => e.name === item);
          if (temp === undefined) {
            temp = { image: "", name: "", author: "", time: "", finished: false };
          }

          temp.finished = true;
          const a = readingBooks.filter((e) => e.name !== item);
          readingBooks = a;
          finishedBooks.push(temp);
          setbtn(!btn);
    }
  };

  const handleReadAgain = (item: string) => {
    if(item==="Beyond Entrepreneurship 2.0"){
          let temp;
          temp = finishedBooks.find((e) => e.name === item);
          if (temp === undefined) {
            temp = { image: "", name: "", author: "", time: "", finished: false };
          }
          temp.finished = false;
          const a = finishedBooks.filter((e) => e.name !== item);
          finishedBooks = a;
          readingBooks.push(temp);
          setbtn(!btn);
    }
  };

  const [visible, setvisible] = useState(false);
  const handleChange = () => {
    setvisible(!visible);
    seticon(!icon);
  };

  let comp = visible ? <ExploreMenu handleChange={handleChange} /> : undefined;

  return (
    <Router>
        <ToolBarHeader icon={icon} handleChange={handleChange} />
        {comp}
        <Routes>
          <Route
            path="/bookdetails"
            element={
              <>
                <KeyIdeas />
                <BookDetailsGrid btn={btn} handleFinish={handleFinish} />
                <BookDetailsTabs />
              </>
            }
          ></Route> 
          <Route
            path="/explore"
            element={
              <>
                <MainBanner />
                <MainSearch search={setSearch} />
                <Heading />
                <EnterprenurReading value={search} />
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <MyLibraryHeading />
                <ReadingTabs
                  currentReading={readingBooks}
                  finishedReading={finishedBooks}
                  handleReadAgain={handleReadAgain}
                  handleFinish={handleFinish}
                />
              </>
            }
          ></Route>
        </Routes>
        <FooterMain />
    
    </Router>
  );
}

export default App;
