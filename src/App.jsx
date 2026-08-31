import "./App.css";

import { Routes, Route } from "react-router";

import { Layout } from "./components/layout/Layout";
// import { ArticlePage } from "./pages/ArticlePage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { DigestArchivePage } from "./pages/DigestArchivePage";
import { DigestArchiveDetailPage } from "./pages/DigestArchiveDetailPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<DigestArchivePage />} />
        <Route path="/archive/:id" element={<DigestArchiveDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="/article/:id" element={<ArticlePage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
