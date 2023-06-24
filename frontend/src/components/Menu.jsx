import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          {post && post.img !== null && post.img !== undefined && (
  <img src={`../upload/${post.img}`} alt="" />
)}
          <Link className="link" to={`/single/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
