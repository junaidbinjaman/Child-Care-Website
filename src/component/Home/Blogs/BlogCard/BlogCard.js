import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="image-box">
        <img src={blog.image} className="blog-image" alt="" />
      </div>
      <h1>{blog.title}</h1>
      <p>{blog.content.substring(0, 180)}</p>
      <div className="blog-card-footer">
        <p>{blog.publishedDate}</p>
        <p>Comment: {blog.comment}</p>
      </div>
    </div>
  );
};

export default BlogCard;
