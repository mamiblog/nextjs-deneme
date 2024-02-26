import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { GiFairy } from "react-icons/gi";
import ThemeSwitcher from "./themeSwitcher";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  const menuItems = [
    {
      title: "Anasayfa",
      href: "/",
    },

    {
      title: "Ürünler",
      href: "/urunler",
    },
    {
      title: "Hakkımızda",
      href: "/hakkimizda",
    },

    {
      title: "İletişim",
      href: "/iletisim",
    },

    {
      href: "/admin",
    },
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href={"/"} className="font-bold text-inherit">
            <GiFairy className="text-warning text-4xl" />

            <span className="text-warning hidden sm:flex">
              Alışveriş Perisi
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <NavbarBrand className="hidden sm:flex">
          <Link
            href={"/"}
            className="font-bold text-inherit flex items-center gap-x-2"
          >
            <GiFairy className="text-warning text-4xl" />
            <span className="text-warning hidden sm:flex">
              Alışveriş Perisi
            </span>
          </Link>
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            className="hidden sm:flex text-lg"
          >
            <Link
              className="w-full hover:text-warning duration-250"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
        <NavbarContent justify="end">
          <div className="hidden sm:flex">
            <ThemeSwitcher />
          </div>
        </NavbarContent>
      </NavbarContent>

      {/* Mobile Nav */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="flex sm:hidden">
          <ThemeSwitcher />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
