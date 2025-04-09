import { Route, Routes } from "react-router-dom";
import BlogPosts from "../sections/BlogPosts";

function Blog() {
  return (
    <Routes>
      <Route path="/" element={<BlogPosts />} />
      <Route path="/single/:id/*" element={<div>single page</div>} />
    </Routes>
  );
}

export default Blog;
