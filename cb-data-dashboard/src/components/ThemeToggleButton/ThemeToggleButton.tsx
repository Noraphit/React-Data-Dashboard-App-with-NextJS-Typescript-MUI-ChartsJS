import { IconButton, useMediaQuery } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from 'react'
import { useTheme } from '@mui/system';
import Typography from '@mui/material/Typography';

export type ThemeToggleButton = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void; }>,
}

const ThemeToggleButton = (props: ThemeToggleButton) => {
  const mobileCheck = useMediaQuery('(min-width: 500px)');
  const { ColorModeContext = React.createContext({ toggleColorMode: () => { } }) } = props;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      {mobileCheck &&
        <Typography>{theme.palette.mode}</Typography>
      }
      <IconButton sx={{ mr: 2 }} title={theme.palette.mode + ' mode'} aria-label={theme.palette.mode + ' mode button'} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </>
  );
};

export default ThemeToggleButton;