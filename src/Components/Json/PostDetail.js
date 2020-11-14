import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(null);

  const params = useParams(); // for getting link params

  useEffect(() => {
    setId(params["id"]);
  }, [params]);

  useEffect(() => {
    const getPost = async () => {
      if (!id) return;
      const res = await Axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(res.data);
    };

    getPost();
  }, [id]);

  return (
    <div>
      <h3>{post.title} </h3>
      {post.body}
    </div>
  );
};

export default PostDetail;
