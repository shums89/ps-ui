import { Bell, Gamepad2, Handbag, SmilePlus, Trophy, Wifi } from "lucide-react"

const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

export function Header() {
  return (
    <header className="p-8 grid grid-cols-3 items-center">
      <div className="flex items-center gap-18">
        <div className="flex items-center gap-3">
          <time className="font-semibold">{currentTime}</time>
          <Wifi className="size-4" />
        </div>

        <div className="text-xs flex items-center gap-1">
          <span className="flex items-center gap-1">
            <Handbag className="size-5" />
          </span>

          <span>|</span>

          <span>$39,97</span>
        </div>
      </div>

      <div className="text-xs font-semibold flex items-center justify-center gap-2 ">
        <div className="flex flex-col items-center">
          <Gamepad2 />
          <span className="-mt-1.5">1</span>
        </div>

        <div className="flex flex-col items-center">
          <Gamepad2 />
          <span className="-mt-1.5">2</span>
        </div>
      </div>

      <div className="flex items-center justify-end gap-6 text-sm font-semibold">
        <div className="flex items-center gap-1.5">
          <Bell fill="white" />
          <span>12</span>
        </div>

        <div className="flex items-center gap-2.5">
          <SmilePlus />
          <span>9</span>
        </div>

        <div className="flex items-center gap-3">
          <img src="/images/ps-plus.svg" alt="PS Plus" width={24} height={24} />

          <div className="flex items-center gap-3">
            <img src="/images/avatar.png" alt="Avatar" width={45} height={45} />
            <div>
              <div className="mb-1">FallingStikman</div>
              <div className="flex items-center gap-1 text-xs">
                <Trophy size={16} />
                <span>14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
