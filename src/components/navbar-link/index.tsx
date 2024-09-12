import { Link as NextUiLink, NavbarItem } from "@nextui-org/react";
import { ReactNode, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string
  children: ReactNode
}

function NavbarLink({ to, children }: Props) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => () => setIsActive(false))

  return (
    <NavbarItem isActive={isActive}>
      <NextUiLink>
        <NavLink className={(navData) => (`text-white ${navData.isActive && 'underline'}`) } to={to}>
          { children }
        </NavLink>
      </NextUiLink>
    </NavbarItem>
  )
}

export default NavbarLink