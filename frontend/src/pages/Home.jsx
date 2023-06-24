import React, { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  console.log(cat)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
            {post && post.img !== null && post.img !== undefined && (
  <img src={`../upload/${post.img}`} alt="" />
)}
            </div>
            <div className="content">
              <Link className="link" to={`/single/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p
  style={{
    maxHeight: "200px", // Set the maximum height to your desired value
    overflow: "auto", // Enable scrolling when content exceeds the maximum height
  }}
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(post.desc),
  }}
></p> 
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;