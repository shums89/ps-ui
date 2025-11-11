import type { THotkeyKey } from "../../config/hotkeys.data";

interface Props {
  keyDetail: THotkeyKey
}

export function KeyInfo({ keyDetail: key }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-white rounded-full size-5 text-[#353841] shadow flex items-center justify-center p-0.5">{key.icon}</div>
      <div>{key.label}</div>
    </div>
  )
}
