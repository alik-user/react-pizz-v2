import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const FullPizza = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string
    title: string
    price: number
  }>()
  const { id } = useParams()
  const navigate = useNavigate()
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://6687fb7d0bc7155dc01a0423.mockapi.io/items/${id}`)
        setPizza(data)
        console.log(data);
      } catch (error) {
        alert('пицца не найдена')
        navigate('/')
      }
    }
    fetchPizza()
  }, [])

  if (!pizza) {
    return 'Загрузка пицц...'
  }
  return (

    <div className='container'>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  )
}

export default FullPizza;