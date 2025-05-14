"use client";

import { NavigationMenuItem } from "@/types/navigation-menu-item";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navbarItems: NavigationMenuItem[] = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره های ریکت و نکست", href: "/courses" },
  { title: "مقالات و مطالب", href: "/blog" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-x-8 mr-12">
      {navbarItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={`navigation-${item.title}`}>
            <Link
              href={item.href}
              className={`hover:text-primary transition-colors pb-2 ${
                isActive &&
                "dark:text-primary border-b-2 dark:border-primary/30"
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
