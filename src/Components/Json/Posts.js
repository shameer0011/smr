import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

import PostDetail from "./PostDetail";
import axios from "axios";
import { useState, useEffect } from "react";
export const Posts = () => {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
  //       //   console.log(Array.isArray(res.data));
  //       setPosts(res.data);
  //     });
  //   }, []);

  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (er) {
        console.log(er);
      }
    };
    fetchPost();
  }, []);

  const clickHandler = (id) => {
    history.push(`/post/${id}`);
  };

  let routes = (
    <Switch>
      <Route exact path="/post/:id" component={PostDetail} />
    </Switch>
  );

  return (
    <>
      <Row>
        <Col xs={6}>
          <Row>
            {posts.map((post) => (
              <Col md={6} key={post.id} style={{ marginTop: 2 }}>
                <Card style={{ width: "18rem", height: "12rem" }}>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => clickHandler(post.id)}
                    >
                      View Post
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={6}>{routes}</Col>
      </Row>
    </>
  );
};
