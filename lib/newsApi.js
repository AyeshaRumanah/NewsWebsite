export async function fetchNews({ q, category, page = 1, pageSize = 12 }) {
  const params = new URLSearchParams();
  if (q) params.append('q', q);
  if (category) params.append('category', category);
  params.append('page', page);
  params.append('pageSize', pageSize);
  const res = await fetch(`/api/news?${params.toString()}`);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}