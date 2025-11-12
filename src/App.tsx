import { TopMenu } from './components/top-menu/TopMenu'
import { GameCarousel } from './components/game-carousel/GameCarousel'
import { useRef, useState } from 'react'
import type { TCategorySlug } from './types'
import { SwiperRef } from 'swiper/react'
import { HotKeysConfig, KeyEnum } from './config/hotkeys.config'
import { useHotkeys } from 'react-hotkeys-hook'
import { CATEGORIES } from './data/categories.data'
import { GameDetails } from './components/game-details/GameDetails'

type TLevelFocus = 'top-menu' | 'game-carousel' | 'details'

function App() {
  const [activeCategory, setActiveCategory] = useState<TCategorySlug>('all')
  const [levelFocus, setLevelFocus] = useState<TLevelFocus>('game-carousel')

  const swiperRef = useRef<SwiperRef>(null)

  useHotkeys(KeyEnum.ArrowUp, () => {
    if (levelFocus === 'game-carousel') setLevelFocus('top-menu')
    else if (levelFocus === 'details') setLevelFocus('game-carousel')
  })

  useHotkeys(KeyEnum.ArrowDown, () => {
    if (levelFocus === 'top-menu') setLevelFocus('game-carousel')
    else if (levelFocus === 'game-carousel') setLevelFocus('details')
  })


  useHotkeys(KeyEnum.ArrowRight, () => {
    if (levelFocus === 'top-menu') {
      const nextCategoryIndex = CATEGORIES.findIndex(category => category.slug === activeCategory) + 1
      if (nextCategoryIndex < CATEGORIES.length) {
        setActiveCategory(CATEGORIES[nextCategoryIndex].slug)
      }
    } else if (levelFocus === 'game-carousel') {
      swiperRef.current?.swiper.slideNext()
    }
  })

  useHotkeys(KeyEnum.ArrowLeft, () => {
    if (levelFocus === 'top-menu') {
      const prevCategoryIndex = CATEGORIES.findIndex(category => category.slug === activeCategory) - 1
      if (prevCategoryIndex >= 0) {
        setActiveCategory(CATEGORIES[prevCategoryIndex].slug)
      }
    } else if (levelFocus === 'game-carousel') {
      swiperRef.current?.swiper.slidePrev()
    }
  })

  return (
    <div className='flex flex-col justify-between' style={{ height: '75%' }}>
      <TopMenu activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <GameCarousel swiperRef={swiperRef} />
      {levelFocus === 'details' && <GameDetails />}
    </div>
  )
}

export default App
