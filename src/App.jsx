import "./App.css";

import { Routes, Route } from "react-router";

import { Layout } from "./components/layout/Layout";
// import { ArticlePage } from "./pages/ArticlePage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/article/:id" element={<ArticlePage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
