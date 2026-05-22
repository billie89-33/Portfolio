import { useCallback, useEffect, useState } from 'react'
import { fetchHomeProducts } from '../api/home.api'

export default function useHomeLayout() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [cartCount, setCartCount] = useState(0)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchHomeProducts()
      if (!Array.isArray(data)) throw new Error('Invalid product payload')
      setProducts(data)
    } catch (err) {
      setError(err.message || 'Failed to load products')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const addToCart = (product) => {
    try {
      alert(`Added ${product.name} to your cart successfully!`)
      setCartCount((c) => c + 1)
    } catch (e) {
      // swallow
    }
  }

  return { products, loading, error, addToCart, cartCount }
}
