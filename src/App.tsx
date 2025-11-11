import { TopMenu } from './components/top-menu/TopMenu'
import { GameCarousel } from './components/game-carousel/GameCarousel'
import { useState } from 'react'
import type { TCategorySlug } from './types'

function App() {
  const [activeCategory, setActiveCategory] = useState<TCategorySlug>('all')

  return (
    <div>
      <TopMenu activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <GameCarousel />
    </div>
  )
}

export default App
