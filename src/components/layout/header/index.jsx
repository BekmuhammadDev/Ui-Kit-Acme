import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom"
import "./style.scss"

const index = () => {
  return (
    <Navbar position="static" className="border-b">

      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        <NavbarItem isActive>
          <NavLink to="/">
            Home
          </NavLink>
        </NavbarItem>


        <NavbarItem isActive>
          <NavLink to="/posts">
            Posts
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink to="/followers">
            Followers
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink to="/profile">
            Profile
          </NavLink>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent justify="end">

        <NavbarItem className="hidden lg:flex">
          <Button as={NavLink} to="/login">Login</Button>
        </NavbarItem>

      </NavbarContent>
    </Navbar>
  );
}

export default index;
