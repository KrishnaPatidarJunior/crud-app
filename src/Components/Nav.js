import React from "react";
import { AppBar, Toolbar,styled } from "@mui/material";
import { NavLink } from 'react-router-dom';
const Header  = styled(AppBar)`
background: #194522;
`
const Tabs = styled(NavLink)`
font-size: 15px;
margin-right:20px;
color:inherit;
text-decoration:none;
`

function Nav() {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">CURD OPERATION</Tabs>
          <Tabs to="add">Add User</Tabs>
          <Tabs to="all">All User</Tabs>
        </Toolbar>
      </Header>
    </>
  );
}

export default Nav;
