import { CATEGORIES } from "../../data/categories.data";
import cn from 'clsx';
import type { TCategorySlug } from "../../types";

interface Props {
  activeCategory: string;
  setActiveCategory: (slug: TCategorySlug) => void;
}

export function TopMenu({ activeCategory, setActiveCategory }: Props) {
  return (
    <nav className="ml-28 mt-5">
      <ul className="flex items-center">
        {CATEGORIES.map(category => (
          <li key={category.slug}>
            <button
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                'border-2 font-medium rounded-full py-0.5 px-5'
                , activeCategory === category.slug ? 'border-[#1d6ab2]' : 'border-transparent')}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
