import { UseGameStore } from "../../store";
import { GameHeader } from "./GameHeader";
import { GameLauncher } from "./GameLauncher";

export function GameDetails() {
  const { getActiveGame } = UseGameStore()

  return (
    <div className="flex items-center justify-between">
      <GameHeader game={getActiveGame()} />
      <GameLauncher />
    </div>
  )
}
