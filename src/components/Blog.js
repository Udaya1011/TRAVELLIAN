import React from "react";

const BlogPostCard = () => {
  const postTitle = "Beautiful Italy";
  const postSubtitle = "Let's travel";
  const postImageSrc =
    "https://i.pinimg.com/1200x/f6/49/22/f64922eda08ec679dee8eee456d4b13e.jpg";
  const postText =
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislike, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues.";

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1 className="blog-title">Our Blog</h1>
        <hr className="title-underline" />
        <p className="blog-subtitle">
          An insight into incredible experiences around the world
        </p>
      </header>

      <div className="blog-post-card">
        <div className="post-image-wrapper">
          <img src={postImageSrc} alt={postTitle} className="post-image" />
        </div>
        <div className="post-content">
          <h2 className="post-title-main">{postTitle}</h2>
          <h3 className="post-subtitle-main">{postSubtitle}</h3>
          <p className="post-text">{postText}</p>
          <a href="#" className="read-more-link">
            Read More <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <style>
        {`
.blog-container {
  max-width: 1400px;

  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.blog-header {
  margin-bottom: 40px;
  text-align: left; 
}

.blog-title {
  font-size: 2.5em;
  font-weight: 400;
  color: #333;
  margin-bottom: 5px;
}

.title-underline {
  width: 160px;
  height: 5px;
  background-color: #FF7757;
  margin: 0; 
}

.blog-subtitle {
  font-size: 1em;
  color: #666;
  margin: 5px 0 0 0;
}

.blog-post-card {
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

.post-image-wrapper {
  flex: 1 1 50%;
  min-width: 300px;
  position: relative;
}

.post-image {
  width: 100%;
  height: 100%;
  max-height: 573px;
  object-fit: cover;
  display: block;
}

.post-content {
  flex: 1 1 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.post-title-main {
  font-size: 2.2em;
  font-weight: 500;
  color: #333;
  margin-bottom: 0;
}

.post-subtitle-main {
  font-size: 1.5em;
  font-weight: 300;
  color: #666;
  margin-top: 5px;
  margin-bottom: 20px;
}

.post-text {
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 1em;
}

.read-more-link {
  color: salmon;
  text-decoration: none;
  font-weight: 600;
  align-self: flex-start;
  transition: color 0.3s;
}

.read-more-link:hover {
  color: darkred;
}

.arrow {
  margin-left: 5px;
}

@media (max-width: 992px) {
  .blog-post-card {
    flex-direction: column;
  }
  .post-image-wrapper {
    width: 100%;
    height: 300px;
  }
  .post-content {
    padding: 30px 20px;
  }
  .post-title-main {
    font-size: 1.8em;
  }
  .post-subtitle-main {
    font-size: 1.2em;
  }
  .post-text {
    font-size: 0.95em;
  }
}

@media (max-width: 576px) {
  .blog-title {
    font-size: 2em;
  }
  .post-title-main {
    font-size: 1.5em;
  }
  .post-subtitle-main {
    font-size: 1em;
  }
  .post-text {
    font-size: 0.9em;
  }
  .post-image-wrapper {
    height: 200px;
  }
}
        `}
      </style>
    </div>
  );
};

export default BlogPostCard;
