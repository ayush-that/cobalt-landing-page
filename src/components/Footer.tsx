import { Box, Container, Typography, Link, Stack, IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            justifyContent="space-between" 
            alignItems={{ xs: 'flex-start', md: 'center' }}
            spacing={2}
          >
            <Stack spacing={2} sx={{ flex: 1 }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '12.9px',
                  fontWeight: 500,
                }}
              >
                © 2023 Cobalt Financial Technologies Inc.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '12.9px',
                    fontWeight: 500,
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '12.9px',
                    fontWeight: 500,
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  Terms of Use
                </Link>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={1}>
              <IconButton 
                size="small"
                sx={{ 
                  color: 'text.secondary',
                  '&:hover': { color: 'text.primary' }
                }}
              >
                <XIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small"
                sx={{ 
                  color: 'text.secondary',
                  '&:hover': { color: 'text.primary' }
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small"
                sx={{ 
                  color: 'text.secondary',
                  '&:hover': { color: 'text.primary' }
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>

          <Stack spacing={1} sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#71717a',
                fontSize: '13.1px',
                lineHeight: 1.5,
              }}
            >
              Cobalt is a trademark or registered trademark of Cobalt Financial Technologies Inc. Any other trademarks are the 
              property of their respective owners. Unless otherwise noted, use of third party logos does not imply endorsement of, 
              sponsorship of, or affiliation with Cobalt.
            </Typography>

            <Typography 
              variant="caption" 
              sx={{ 
                color: '#71717a',
                fontSize: '13.1px',
                lineHeight: 1.5,
              }}
            >
              Cobalt is a financial technology company, not a bank. Banking services are provided by Celtic Bank and Evolve Bank & 
              Trust®, Members FDIC.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}