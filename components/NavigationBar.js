"use client";

import Link from "next/link";
import {
  PiHouse,
  PiHouseFill,
  PiCards,
  PiCardsFill,
  PiBookmarks,
  PiBookmarksFill,
} from "react-icons/pi";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const icon_className = "w-5 h-5 md:w-6 md:h-6";

  return (
    <div className="flex max-w-fit fixed bottom-5 md:bottom-10 inset-x-0 mx-auto border border-black/[0.2] dark:border-white/[0.2] rounded-full z-[1000] px-4 py-2 items-center justify-center space-x-2.5">
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
        icon={<PiBookmarks className={icon_className} />}
        selected_icon={<PiBookmarksFill className={icon_className} />}
        url="/blog"
        text="Blog"
      />
    </div>
  );
}

function Button({ icon, selected_icon, url, text }) {
  const pathname = usePathname();

  return (
    <Link href={url} prefetch={true} className="group">
      <div className="hover:text-gray hover:dark:text-bgray cursor-pointer">
        {pathname === url ? selected_icon : icon}
      </div>
      <span className="absolute px-3 py-1.5 mb-2 bottom-10 left-0 right-0 mx-auto max-w-min rounded-md shadow-md bg-gray/[0.1] dark:bg-bgray/[0.1] bg-opacity-25 text-xs font-medium transition-all duration-100 scale-0 origin-bottom group-hover:scale-100">
        {text}
      </span>
    </Link>
  );
}

function Divider() {
  return (
    <div className="w-px h-4 rounded-full bg-black/[0.2] dark:bg-white/[0.2]" />
  );
}
