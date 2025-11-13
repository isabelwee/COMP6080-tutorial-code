import { AppBar, Box, Button, Grid, Link, styled, TextField, Toolbar, Typography } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import beachImg from "./beach.jpeg"


function App() {

  const handleClick = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "" || password === "") {
      alert("Enter username and password");
    } else {
      alert(`Welcome to Travelog ${username}!`)
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" class>
          <Toolbar>
            <AirplanemodeActiveIcon sx={{ mr: 2 }}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Travel Log
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={2} sx={{ height: "100vh" }}>
        <Grid size={5} sx={{ backgroundImage: `url(${beachImg})`}}>
        </Grid>
        <Grid size={7} sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h2" sx={{ mt: 12 }}>Welcome to Travel Log</Typography>
          <Box>
            <Typography variant="h4">Enter Username:</Typography>
            <TextField id="username" label="Username" variant="outlined" />
          </Box>
          <Box>
            <Typography variant="h4">Enter Password:</Typography>
            <TextField id="password" label="Password" variant="outlined" type="password" />
          </Box>
          <Button variant="contained" onClick={handleClick}>Sign in</Button>
          <Link href="#">Sign Up for a New Account</Link>
        </Grid>
      </Grid>
    </>
  );
}

export default App