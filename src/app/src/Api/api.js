const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const api = async (url, method = "GET", body = undefined) => {
  return await fetch(`http://localhost:8000/${url}/`, {
    method: method,
    headers,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .catch((e) => e);
};

export default api;
