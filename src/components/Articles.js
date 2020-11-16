import React, { useEffect, useState } from "react";
import SceletonArticle from "../skeletons/SceletonArticle";
import { useTheme } from "./ThemeProvider";

function Articles() {
  const [articles, setArticles] = useState(null);
  const [theme] = useTheme();

  useEffect(() => {
    const loadArticles = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setArticles(data);
    };
    loadArticles();
  }, []);

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles &&
        [1, 2, 3, 4, 5].map((item) => (
          <SceletonArticle theme={theme} key={item} />
        ))}
    </div>
  );
}

export default Articles;
