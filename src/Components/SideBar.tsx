import React from "react";
import { PencilLine } from "phosphor-react";
import { SideNav, Cover, Profile, SideFooter } from "../styles/SideBar";
import { UserName, UserRole } from "../styles/GlobalStyle";
import { Avatar } from "./Avatar";

export const SideBar = () => {
  return (
    <SideNav>
      <Cover src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <Profile>
        <Avatar src="https://avatars.githubusercontent.com/u/83433557?v=4" />
        <UserName margin="1rem 0 0 0">Gabriel Moreira</UserName>
        <UserRole margin="none">Dev Front-End</UserRole>
      </Profile>
      <SideFooter>
        <a href="#">
          <PencilLine size={20} />
          Edite seu perfil
        </a>
      </SideFooter>
    </SideNav>
  );
};
