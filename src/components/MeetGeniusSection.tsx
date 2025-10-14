import { Box, Container, Typography, Stack, Button } from '@mui/material';

export default function MeetGeniusSection() {
  return (
    <Box className="py-24">
      <Container maxWidth="lg">
        <Stack spacing={8}>
          <Box className="max-w-2xl">
            <Typography 
              variant="h2" 
              className="gradient-text"
              sx={{
                fontSize: { xs: '32px', md: '48.2px' },
                lineHeight: { xs: '1.2', md: '51.36px' },
                textAlign: 'left',
              }}
            >
              Meet Genius
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(161, 161, 170, 0.8)',
                fontSize: '17.9px',
                textAlign: 'left',
                mt: 3,
              }}
            >
              Our AI-driven assistant is designed to decode complex financial 
              figures and <Box component="span" sx={{ color: 'text.primary', fontWeight: 500 }}>illuminate key trends</Box> in your business.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {/* Smart Forecasting Card */}
            <Box
              className="glass-card"
              sx={{
                borderRadius: '16px',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(244, 244, 245, 0.2)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  mb: 2,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '568px',
                    height: '160px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(90deg, rgba(8,145,178,1) 0%, rgba(14,165,233,1) 50%, rgba(124,58,237,1) 100%)',
                    filter: 'blur(96px)',
                    opacity: 0.6,
                  },
                }}
              >
                <img
                  src="/forecasting-chart.svg"
                  alt="Smart Forecasting"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </Box>

              <Stack spacing={2} className="mt-auto">
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: 'text.primary',
                    fontSize: '17.9px',
                    fontWeight: 500,
                  }}
                >
                  Smart forecasting
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(161, 161, 170, 0.8)',
                    fontSize: '13.9px',
                    lineHeight: 1.7,
                  }}
                >
                  Harness the power of Cobalt's predictive analytics to map 
                  out the financial future of your business.
                </Typography>
              </Stack>
            </Box>

            {/* Chat with Genius Card */}
            <Box
              className="glass-card"
              sx={{
                borderRadius: '16px',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(244, 244, 245, 0.2)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  mb: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 4,
                }}
              >
                <Typography 
                  variant="body2"
                  sx={{ 
                    color: 'text.primary',
                    fontSize: '13.9px',
                    fontWeight: 500,
                    mb: 10,
                  }}
                >
                  Hey! How can I help you?
                </Typography>

                <Box
                  sx={{
                    backgroundColor: '#18181b',
                    border: '1px solid rgba(228, 228, 231, 0.1)',
                    borderRadius: '6px',
                    p: 2,
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    maxWidth: '400px',
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: '13.9px',
                      }}
                    >
                      ✨ Who's our most profitable customer?
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: '#000',
                        fontSize: '13.9px',
                        fontWeight: 500,
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: 'primary.light',
                        },
                      }}
                    >
                      Ask Genius
                    </Button>
                  </Stack>
                </Box>
              </Box>

              <Stack spacing={2} className="mt-auto">
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: 'text.primary',
                    fontSize: '17.9px',
                    fontWeight: 500,
                  }}
                >
                  Chat with Genius
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(161, 161, 170, 0.8)',
                    fontSize: '13.9px',
                    lineHeight: 1.7,
                  }}
                >
                  Just ask. With Genius by your side, navigating the 
                  financial maze becomes intuitive and effortless.
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}