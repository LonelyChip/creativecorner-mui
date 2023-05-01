import { Explore, Group, Home, ModeNight, Person } from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

interface Props {
  setMode: (mode: string) => void;
  mode: string;
}
function Sidebar(props: Props) {
  const { mode, setMode } = props;
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List>
          <ListItemButton component="a" href="#Home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component="a" href="#Friends">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          <ListItemButton component="a" href="#Groups">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
          <ListItemButton component="a" href="#Explore">
            <ListItemIcon>
              <Explore />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
          <ListItemButton component="a" href="#Darkmode">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch
              onChange={() => setMode(mode === "dark" ? "light" : "dark")}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
