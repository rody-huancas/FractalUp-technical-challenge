import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts
import AppLayout from "../layouts/AppLayout";
// pages
import { Home, ViewOne, ViewTwo } from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<ViewOne />} />
          <Route path="/contact" element={<ViewTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
