const requestApi = async (endpoint, body) => {
  const response = await fetch(`http://localhost:3001/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
}

export default requestApi;