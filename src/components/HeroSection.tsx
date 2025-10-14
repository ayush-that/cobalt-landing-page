import { Box, Container, Typography, Button, Stack } from '@mui/material';
import DownArrowIcon from './icons/DownArrowIcon';

export default function HeroSection() {
  return (
    <Box
      className="relative min-h-screen flex items-center justify-center"
      sx={{
        background: 'radial-gradient(45.34% 49.55% at 50% 0%, rgba(94, 176, 239, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
        pt: { xs: 20, md: 24 },
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" className="text-center" sx={{ mt: { xs: 8, md: 12 } }}>
          <Typography 
            variant="h1" 
            className="gradient-text"
            sx={{ 
              maxWidth: '900px',
              fontSize: { xs: '40px', md: '71.9px' },
              lineHeight: { xs: '1.2', md: '77.04px' },
            }}
          >
            Unleash the power of intuitive finance
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ maxWidth: '800px', fontSize: '19.8px' }}
          >
            Say goodbye to the outdated financial tools. Every small business owner, 
            regardless of the background, can now manage their business like a pro. Simple. 
            Intuitive. And never boring.
          </Typography>

          <Stack spacing={2} alignItems="center" className="mt-8">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#000',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'text.primary',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: '#1a1a1a',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              Join the waitlist
            </Button>

            <Stack spacing={1} alignItems="center" className="mt-4">
              <Typography variant="body2" color="text.secondary">
                Learn more
              </Typography>
              <DownArrowIcon width={18} height={18} color="#a1a1aa" />
            </Stack>
          </Stack>

          <Box 
            className="mt-16 w-full"
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '256px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(34,211,238,0) 0%, rgba(34,211,238,1) 50%, rgba(34,211,238,0) 100%)',
              }
            }}
          >
            <img
              src="/dashboard-preview.png"
              alt="Dashboard Preview"
              className="w-full rounded-2xl"
              style={{
                boxShadow: '0px 0px 0px 1px rgba(255, 255, 255, 0.1)',
                maxWidth: '1216px',
                margin: '0 auto',
                display: 'block',
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}