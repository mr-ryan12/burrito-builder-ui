export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const addOrderApi = order => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    body: JSON.stringify(order),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Something went wrong')
    }
  })
}