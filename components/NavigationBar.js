"use client";

import Link from "next/link";
import {
  PiHouse,
  PiHouseFill,
  PiCards,
  PiCardsFill,
  PiPencilSimple,
  PiPencilSimpleFill,
  PiBookmarks,
  PiBookmarksFill,
} from "react-icons/pi";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const icon_className = "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7";

  return (
    <div className="flex max-w-fit fixed bottom-5 md:bottom-10 inset-x-0 mx-auto border border-foreground/[0.2] rounded-full z-[1000] px-3 py-1.5 sm:px-4 sm:py-2 items-center justify-center space-x-2.5">
      <Button
        icon={<PiHouse className={icon_className} />}
        selected_icon={<PiHouseFill className={icon_className} />}
        url="/"
        text="Home"
      />
      <Divider />
      <Button
        icon={<PiCards className={icon_className} />}
        selected_icon={<PiCardsFill className={icon_className} />}
        url="/projects"
        text="Projects"
      />
      <Divider />
      <Button
        icon={<PiPencilSimple className={icon_className} />}
        selected_icon={<PiPencilSimpleFill className={icon_className} />}
        url="/blog"
        text="Blog"
      />
      <Divider />
      <Button
        icon={<PiBookmarks className={icon_className} />}
        selected_icon={<PiBookmarksFill className={icon_className} />}
        url="/bookmarks"
        text="Bookmarks"
      />
    </div>
  );
}

function Button({ icon, selected_icon, url, text }) {
  const pathname = usePathname();

  return (
    <Link href={url} prefetch={true} className="group">
      <div className="text-foreground/80 md:hover:text-foreground-light/90 cursor-pointer">
        {pathname === url ? selected_icon : icon}
      </div>
      <span className="absolute px-3 py-1.5 mb-2 md:mb-4 bottom-10 left-0 right-0 mx-auto max-w-min rounded-md shadow-md bg-foreground-light/[0.1] bg-opacity-25 text-xs font-medium transition-all duration-100 scale-0 origin-bottom md:group-hover:scale-100">
        {text}
      </span>
    </Link>
  );
}

function Divider() {
  return <div className="w-px h-4 rounded-full bg-foreground/[0.2]" />;
}
