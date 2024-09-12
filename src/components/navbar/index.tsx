import {Navbar as NextUiNavBar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import React from "react";
import NavbarLink from "../navbar-link";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <NextUiNavBar>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Маркетплейс</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarLink to={"/"}>
          Объявления
        </NavbarLink>
        <NavbarLink to={"/orders"}>
          Заказы
        </NavbarLink>
      </NavbarContent>
      <NavbarMenu className="bg-slate-600">
        <NavbarMenuItem>
        <NavbarLink to={"/"}>
          Объявления
        </NavbarLink>
        <NavbarLink to={"/orders"}>
          Заказы
        </NavbarLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUiNavBar>
  )
}

export default Navbar