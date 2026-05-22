// Mock API for Home feature — returns product list
export function fetchHomeProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 'p1', name: 'Minimal Watch', price: 59.99, imageUrl: 'https://via.placeholder.com/240x160?text=Watch' },
        { id: 'p2', name: 'Noise Headphones', price: 129.99, imageUrl: 'https://via.placeholder.com/240x160?text=Headphones' },
        { id: 'p3', name: 'Smart Lamp', price: 39.99, imageUrl: 'https://via.placeholder.com/240x160?text=Lamp' },
        { id: 'p4', name: 'Desk Plant', price: 14.99, imageUrl: 'https://via.placeholder.com/240x160?text=Plant' },
        { id: 'p5', name: 'Leather Notebook', price: 24.99, imageUrl: 'https://via.placeholder.com/240x160?text=Notebook' },
        { id: 'p6', name: 'Coffee Mug', price: 12.99, imageUrl: 'https://via.placeholder.com/240x160?text=Mug' },
        { id: 'p7', name: 'Portable Charger', price: 34.99, imageUrl: 'https://via.placeholder.com/240x160?text=Charger' },
        { id: 'p8', name: 'Wireless Mouse', price: 19.99, imageUrl: 'https://via.placeholder.com/240x160?text=Mouse' },
      ])
    }, 500)
  })
}
