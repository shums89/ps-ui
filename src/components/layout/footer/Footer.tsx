import { hotkeysData } from "../../../data/hotkeys.data";
import { KeyInfo } from "../../ui/KeyInfo";

export function Footer() {
  return (
    <div className="flex items-center gap-5 absolute bottom-5 right-8 text-sm">
      {hotkeysData.map(hotkey => (
        <KeyInfo key={hotkey.label} keyDetail={hotkey} />
      ))}
    </div>
  )
}
