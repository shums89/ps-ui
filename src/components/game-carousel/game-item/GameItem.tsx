import type { TGame } from "../../../data/games.data"
import cn from 'clsx'

interface Props {
  game: TGame
}

export function GameItem({ game }: Props) {
  return (
    <button>
      <div className={cn(
        'p-0.5 border-2 border-transparent transition-colors duration-300 ease-in-out'
      )}>
        <img
          className="w-44 h-44 object-cover transition-all duration-300 ease-in-out"
          src={game.coverImage}
          alt={game.title}
        />
      </div>
      <div className="mt-2">
        <img
          className="filter brightness-0 invert opacity-0 transition-opacity duration-300 ease-in-out"
          src={game.platform === 'PS5' ? 'images/ps5.png' : 'images/ps4.png'}
          alt={game.platform}
          width={50}
        />
      </div>
    </button>
  )
}
