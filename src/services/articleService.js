import axios from 'axios';

const API_URL = 'http://localhost:3000/api/articles';

export const getArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    throw error;
  }
};

// Vous pouvez ajouter ici des méthodes pour POST, PUT, DELETE
