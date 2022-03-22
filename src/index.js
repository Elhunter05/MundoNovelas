import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RecommendationsPage from "./pages/Recommendations";
import DonatePage from "./pages/Donate";
import NovelsPage from "./pages/Novels";
import NovelPage from "./pages/Novel";
import ChapterPage from "./pages/Chapter";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          exact
          path="/novels/:novel_link/:chapter_link"
          element={<ChapterPage />}
        />
        <Route exact path="/novels/:novel_link" element={<NovelPage />} />
        <Route exact path="/novels" element={<NovelsPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
