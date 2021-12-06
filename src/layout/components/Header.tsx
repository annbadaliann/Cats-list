import { Fragment, useState } from "react";

import Container from "@mui/material/Container";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import MenuIcon from "@mui/icons-material/Menu";
import { Theme } from "@mui/system";

import Cats from "../../pages/Cats";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    backgroundColor: theme.palette.common.white,
    height: "60px",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "200px",
  },
}));

const Header = (): JSX.Element => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(true);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <Container>
          <Box display="flex" justifyContent="space-between">
            <IconButton onClick={openSidebar} >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </header>
      <Drawer anchor="left" open={isOpen} onClose={closeSidebar}>
        <Cats closeSidebar={closeSidebar}/>
      </Drawer>
    </Fragment>
  );
};

export default Header;
