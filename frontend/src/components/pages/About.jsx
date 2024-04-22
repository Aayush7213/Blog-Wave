import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <h4>Who We Are:</h4>
        <p>
        <span>BLOG WAVE</span> is founded and managed by Aayush Biswas. We're dedicated to delivering high-quality content that meets the needs and interests of our audience. Meet our team of passionate writers and contributors who bring their unique perspectives and expertise to every article.
        </p>
        <h4>What is Blogs:</h4>
        <p>
        BLOG WAVE are online platforms where individuals or groups regularly publish content, covering a wide range of topics such as personal experiences, professional insights, niche interests, news, and more. They serve as a way for people to share their thoughts, expertise, and opinions with an audience, and are managed through blogging platforms. Blogs can be personal, professional, niche-focused, or corporate, and play a significant role in sharing information and fostering community online.
        </p>
        <h4>What We Provide:</h4>
        <p>
        At BLOG WAVE, we're passionate about exploring exciting and in-depth topics. BLOG WAVE is a place where we describe what readers can expect to find on the blog: insightful articles, helpful tips, inspiring stories, and more. Whether you're a seasoned enthusiast or just starting to explore different type of blogs, we aim to provide valuable content that informs, inspires, and entertains.
        </p>
        <h4>Our Mission:</h4>
        <p>
        At BLOG WAVE, our mission is simple: to connect, inspire, empower, and ignite curiosity. We believe that everyone has a unique story to tell and a perspective worth sharing. Through our blog, we aim to create a vibrant community where voices are heard, ideas are celebrated, and connections are forged. We strive to provide valuable insights, actionable advice, and meaningful content that enriches the lives of our readers and encourages them to embrace their passions, pursue their goals, and make a positive impact in the world.
        </p>
        <h4>What We Cover:</h4>
        <p>
       
Our blog covers a wide range of topics related to various aspects of life. From personal development to technology, and everything in between, we strive to offer diverse perspectives, expert insights, and practical advice to our readers. Whether you're looking for informative articles, inspiring stories, in-depth analysis, or practical tips and tricks, you'll find it here.
        </p>
      </div>
    </article>
  );
};

export default About;
