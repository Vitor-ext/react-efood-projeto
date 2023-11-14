import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

export interface RestaurantMenu {
  id: number
  foto: string
  preco: string
  nome: string
  descricao: string
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  capa: string
  tipo: string
  avaliacao: string
  descricao: string
  cardapio: RestaurantMenu[]
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurantes={restaurants} />
    </>
  )
}

export default Home
