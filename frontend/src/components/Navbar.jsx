import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { pageData } from "../data/pageData";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function NavList() {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("User");
    navigate("/");
  }

  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1 justify-center items-center">
      {pageData.map((page, i) => (
        <Typography
          key={i}
          as={Link}
          to={page.path}
          variant="medium"
          className="font-medium text-black text-lg"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 ">
            {page.name}
          </ListItem>
        </Typography>
      ))}
      <Typography
        as="div"
        variant="small"
        className="font-medium text-black"
      >
        <ListItem 
          className="flex items-center justify-center gap-2 py-2 pr-4 cursor-pointer text-lg text-red-900"
          onClick={handleLogout}
        >
          Logout
        </ListItem>
      </Typography>
    </List>
  );
}

export default function ComplexNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-black">
        <Typography
          as={Link}
          to="/home"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-black"
        >
          Blog App
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}


