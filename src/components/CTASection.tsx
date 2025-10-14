import { Box, Container, Typography, Button, Stack } from '@mui/material';

export default function CTASection() {
  return (
    <Box className="py-32 mb-8">
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            background: 'radial-gradient(70.71% 70.71% at 50% 50%, rgba(199, 199, 199, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
            borderRadius: '32px',
            py: 12,
            px: { xs: 3, md: 6 },
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(6,182,212,1) 0%, rgba(30,64,175,1) 100%)',
              opacity: 0.1,
              borderRadius: '32px',
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '800px', mx: 'auto' }}>
        <Stack spacing={4} alignItems="center" className="text-center">
          <Typography 
            variant="h3" 
            className="gradient-text-light"
            sx={{
              fontSize: { xs: '28px', sm: '32px', md: '31.9px' },
              maxWidth: '700px',
              px: { xs: 2, sm: 0 },
              lineHeight: 1.3,
            }}
          >
            See where financial automation can take your business.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(161, 161, 170, 0.8)',
              fontSize: { xs: '16px', md: '17.9px' },
              maxWidth: '600px',
              px: { xs: 2, sm: 0 },
              lineHeight: 1.6,
            }}
          >
            The first financial tool you'll love. And the last one you'll ever need.
          </Typography>

          <Box className="relative">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#000',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'text.primary',
                px: 4,
                py: 1.5,
                mt: 2,
                '&:hover': {
                  backgroundColor: '#1a1a1a',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              Join the waitlist
            </Button>
            <Box
              sx={{
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '102px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(34,211,238,0) 0%, rgba(34,211,238,0.9) 50%, rgba(34,211,238,0) 100%)',
              }}
            />
          </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
    </Box>
  );
}