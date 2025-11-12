import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { GAMES_DATA } from "../../data/games.data";
import { GameItem } from "./game-item/GameItem";
import 'swiper/swiper.css';
import { UseGameStore } from "../../store";
import { RefObject } from "react";

interface Props {
  swiperRef: RefObject<SwiperRef | null>
}
export function GameCarousel({ swiperRef }: Props) {
  const { setActiveGameSlug } = UseGameStore()

  return (
    <div className="ml-32">
      <Swiper
        ref={swiperRef}
        slidesPerView={8}
        spaceBetween={18}
        loop
        slideToClickedSlide
        initialSlide={2}
        onSlideChange={e => {
          const gameSlug = GAMES_DATA[e.realIndex].slug
          setActiveGameSlug(gameSlug)
        }}
      >
        {GAMES_DATA.map(game => (
          <SwiperSlide key={game.slug}>
            <GameItem game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
