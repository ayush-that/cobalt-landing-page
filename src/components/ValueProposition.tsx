import { Box, Container, Typography, Stack } from '@mui/material';

export default function ValueProposition() {
  return (
    <Box className="py-24">
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={8}
          alignItems="center"
        >
          <Box className="flex-1">
            <Typography 
              variant="h2" 
              className="gradient-text"
              sx={{
                fontSize: { xs: '32px', md: '48.2px' },
                lineHeight: { xs: '1.2', md: '51.36px' },
              }}
            >
              Who said finance has to be boring?
            </Typography>
          </Box>

          <Box className="flex-1">
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(161, 161, 170, 0.8)',
                fontSize: '17.9px',
                lineHeight: 1.6,
              }}
            >
              With Cobalt, managing your business finances is effortless, 
              empowering, and anything but boring. Our intuitive platform brings 
              clarity to your cash flow, simplifies your financial decision-making, and 
              puts the power of advanced financial management right at your 
              fingertips. <Box component="span" sx={{ color: 'text.primary', fontWeight: 500 }}>Say no to spreadsheets and tools designed in the 80s.</Box>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}