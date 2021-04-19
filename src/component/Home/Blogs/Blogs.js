import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import "./Blogs.css";

const blogData = [
  {
    image: "http://t.commonsupport.xyz/bebio/images/resource/news-3.jpg",
    publishedDate: "18 Fed, 2021",
    comment: "2",
    title: "We Make Difference in the Life of Child",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
  },
  {
    image: "http://t.commonsupport.xyz/bebio/images/resource/news-3.jpg",
    publishedDate: "18 Fed, 2021",
    comment: "2",
    title: "We Make Difference in the Life of Child",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
  },
  {
    image: "http://t.commonsupport.xyz/bebio/images/resource/news-3.jpg",
    publishedDate: "18 Fed, 2021",
    comment: "2",
    title: "We Make Difference in the Life of Child",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1 className="sub-heading">Time to read our</h1>
      <h2>Latest Blogs</h2>
      <hr />
      <div className="blog-row">
        {blogData.map((blog) => (
          <BlogCard blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
