import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import WorkIcon from "@mui/icons-material/Work";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import LinkIcon from "@mui/icons-material/Link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "../assets/css/main.css";
const Header = () => {
  const pages = ["Home", "Explore"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open

  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        // main: "#3b3b3b",
        main: "#050206",
      },
    },
  });
  let [img, setImg] = useState("");

  let { user, logOut, profileData, authTokens } = useContext(AuthContext);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <WorkIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            {/* <LinkIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            {/* <img src="../assets/img/link.png" alt="logo" /> */}
            {/* <img
              alt="none"
              src={`http://127.0.0.1:8000/media/header/link.png`}
              style={{ border: "none", outline: "none", width: "3%" }}
            /> */}

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white !important",
                textDecoration: "none !important",
              }}
            >
              Forsa
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Chance
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button href="/" sx={{ my: 2, color: "white", display: "block" }}>
                Home
              </Button>
              <Button
                href="/jobs"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Explore
              </Button>
              {user && !user.staff ? (
                <>
                  <Button
                    href="/myApplications"
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Applications
                  </Button>
                  <Button
                    href="/roadmap"
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Road Map
                  </Button>
                </>
              ) : null}
              {/* {authTokens && user.superuser ? null : (
                <>
                  <Button
                    href="/myApplications"
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Applications
                  </Button>
                </>
              )} */}
              <Button
                href="/users"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Profiles
              </Button>
              <Button
                href="/About"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                About
              </Button>
              <Button
                href="/contact"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Contact Us
              </Button>

              {/* {pages.map((page) => (
             
              ))} */}
            </Box>
            {/* {user && user.superuser ? (
              <Button
                variant="contained"
                href="/Jobs/addjob"
                style={{ fontWeight: "bold", backgroundColor: "#9a8174" }}
              >
                <i
                  className="fa-solid fa-plus"
                  style={{ marginRight: "5px" }}
                ></i>
                ADD JOb
              </Button>
            ) : null} */}

            {user ? (
              <div>
                <Stack direction="row" spacing={1}>
                  <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                  >
                    {/* <Avatar
                      alt="none"
                      src={`http://127.0.0.1:8000/media/profile/download.png`}
                    /> */}
                    <Button color="error">{user.username}</Button>
                  </Button>
                </Stack>

                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                  style={{ zIndex: "100" }}
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <a
                              href={`/profile/${user.username}`}
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              <MenuItem>Profile</MenuItem>
                            </a>
                            {user && user.staff ? (
                              <a
                                href="/dashboard/manageposts"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <MenuItem>Dashboard</MenuItem>
                              </a>
                            ) : null}

                            <MenuItem onClick={logOut}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            ) : (
              <>
                {/* <p onClick={logOut}>Logout</p> */}
                <Button
                  style={{ marginRight: "10px" }}
                  href="/signup"
                  variant="outlined"
                  color="success"
                >
                  SignUp
                </Button>

                <Button href="/login" variant="outlined" color="secondary">
                  LogIn
                </Button>
              </>
              // <Link to="/login">Login</Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
    // <div>
    //   <Link to="/">Home</Link>
    //   <span> | </span>
    //   {user ? <p onClick={logOut}>Logout</p> : <Link to="/login">Login</Link>}

    //   {user && <p>Hello {user.username}</p>}
    // </div>
  );
};

export default Header;
