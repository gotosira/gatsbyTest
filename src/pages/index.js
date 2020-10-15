import React from "react";
import { Link } from "gatsby";
import './css/index.css';

export default function Home() {
  return (
    <div>
      <Link to="/about">about</Link>
      <div class="hello">
        Hello world!

      <img src="https://source.unsplash.com/random/200x200" alt="" />
      </div>
    </div>
  );
}
