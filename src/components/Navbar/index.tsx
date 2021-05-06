import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

import style from './styles'

const Navbar = ()=>{

const classes = style()
return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Link href="/" className={classes.title}>Home</Link>
            <Link href="/me" className={classes.title}>Me</Link> 
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
)
}

export default Navbar