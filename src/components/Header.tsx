import { AppBar, Toolbar, Button, Stack } from '@mui/material';
import CobaltLogo from './icons/CobaltLogo';

export default function Header() {
  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      className="bg-transparent backdrop-blur-sm"
      sx={{ 
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        backgroundColor: 'rgba(9, 9, 11, 0.8)',
      }}
    >
      <Toolbar className="px-8">
        <Stack direction="row" alignItems="center" spacing={1} className="flex-1">
          <CobaltLogo width={120} height={32} color="#e4e4e7" />
        </Stack>
        <Stack direction="row" spacing={4} alignItems="center">
          <Button 
            color="inherit" 
            sx={{ 
              color: 'text.secondary',
              '&:hover': { color: 'text.primary' }
            }}
          >
            Blog
          </Button>
          <Button 
            variant="outlined"
            sx={{ 
              color: 'text.primary',
              backgroundColor: '#000',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              '&:hover': { 
                backgroundColor: '#1a1a1a',
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }
            }}
          >
            Join the waitlist
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}