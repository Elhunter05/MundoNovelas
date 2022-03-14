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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
