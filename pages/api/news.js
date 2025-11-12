import axios from 'axios';

export default async function handler(req, res) {
  const { q, category, page = 1, pageSize = 12 } = req.query;
  const apiKey = process.env.NEWSAPI_KEY;

  try {
    let url;

    if (q) {
      // Search news by keyword
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        q
      )}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
    } else {
      // Top headlines + category filter
      url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
      if (category) url += `&category=${encodeURIComponent(category)}`;
    }

    const response = await axios.get(url);

    // If API returns an error
    if (response.data.status !== 'ok') {
      throw new Error(response.data.message || 'Failed to fetch news');
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error('News API Error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to fetch news' });
  }
}
