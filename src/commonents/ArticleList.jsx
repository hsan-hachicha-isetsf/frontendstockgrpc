import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  // Récupérer les articles depuis l'API
  const fetchArticles = async () => {
    const response = await axios.get('http://localhost:3001/api/articles/')
    console.log(response.data)
    setArticles(response.data);
  };

  useEffect(() => {
    fetchArticles();

    // Simuler la réception des notifications de changement de stock (gRPC)
    const interval = setInterval(() => {
      setArticles((prevArticles) =>
        prevArticles.map((article) =>
          article._id === '675bed530d24a37e31b0c53f' ? { ...article, stock: article.stock + 1 } : article
        )
      );
    }, 5000); // Mise à jour du stock toutes les 5 secondes (simulé)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Liste des Articles</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Stock</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article._id}>
              <td>{article.name}</td>
              <td>{article.stock}</td>
              <td>{article.price} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
