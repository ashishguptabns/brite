import './App.css';

import { useEffect, useState, useRef } from 'react'
import { Container, Card, Desc, Img, Title, Price, SearchInput, Products, SearchBox, Loading } from './styles';

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(prev => data.products)
      });
  }, [])

  const searchTimeout = useRef(null)

  const handleSearch = (event) => {
    const term = event.target.value
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current)
    }
    setLoading(true)
    searchTimeout.current = setTimeout(() => {
      fetch(`https://dummyjson.com/products/search?q=${term}`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setProducts(prev => data.products)
        });
    }, 2000);
  }

  return (
    <Container>
      <SearchBox>
        <SearchInput placeholder='Search...' onChange={handleSearch} />
        <Loading>{loading && <p>Loading...</p>}</Loading>
      </SearchBox>
      <Products>
        {products.length > 0 && products.map(product => <Card key={product.id}>
          <Img src={product.thumbnail} />
          <Title>{product.title}</Title>
          <Desc $numLines={3}>{product.description}</Desc>
          <Price>{product.price} INR</Price>
          <Desc>{product.category}</Desc>
        </Card>)}
      </Products>
    </Container>
  );
}

export default App;
