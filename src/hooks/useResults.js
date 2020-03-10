import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: 'washington dc',
          limit: 50
        }
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('Something went HORRIBLY WRONG!?!?!?!')
    }
  }

  // Call searchApi when component is first rendered
  useEffect(() => {
    searchApi('Alcohol')
  }, [])

  return [searchApi, results, errorMessage]
}
