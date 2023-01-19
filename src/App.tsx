import React from "react";
import { GlobalStyle, Wrapper } from "./styles/GlobalStyle";
import { Header } from "./Components/Header";
import { SideBar } from "./Components/SideBar";
import { Post } from "./Components/Post";
import { POSTS } from "./Api";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <SideBar />
        <div>
          {POSTS.map(({ author, id, post, publishedAt }) => {
            return (
              <Post
                key={id}
                {...author}
                post={post}
                publishedAt={publishedAt}
              />
            );
          })}
        </div>
      </Wrapper>
    </>
  );
}
