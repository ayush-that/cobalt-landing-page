import { Box, Typography, Stack } from '@mui/material';
import CobaltIcon from './icons/CobaltIcon';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  showNotifications?: boolean;
}

export default function FeatureCard({ title, description, image, showNotifications }: FeatureCardProps) {
  return (
    <Box
      className="glass-card h-full"
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
          aspectRatio: showNotifications ? '16/9' : '4/3',
          borderRadius: '12px',
          overflow: 'hidden',
          mb: 2,
        }}
      >
        {showNotifications ? (
          <Box sx={{ p: 3, position: 'relative', height: '100%' }}>
            <Stack spacing={2}>
              <NotificationCard
                time="2h ago"
                title="💳 Monica is requesting a new card"
                details={['Card type: Virtual', 'Spend limit: $500 monthly']}
                actions={['Approve', 'Decline', 'Edit']}
              />
              <NotificationCard
                time="52m ago"
                title="📈 Revenue increase alert"
                details={['27% increase in the last 7 days']}
              />
              <NotificationCard
                time="Just now"
                title="🚨 Large expense alert"
              />
            </Stack>
          </Box>
        ) : (
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        )}
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
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'rgba(161, 161, 170, 0.8)',
            fontSize: '13.9px',
            lineHeight: 1.7,
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
}

function NotificationCard({ 
  time, 
  title, 
  details, 
  actions 
}: { 
  time: string; 
  title: string; 
  details?: string[];
  actions?: string[];
}) {
  return (
    <Box
      sx={{
        backgroundColor: '#18181b',
        border: '1px solid rgba(161, 161, 170, 0.1)',
        borderRadius: '6px',
        p: 2,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: '-20px',
          top: '8px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#09090b',
          border: '1px solid #27272a',
        },
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center" className="mb-1">
        <CobaltIcon width={10} height={10} color="#71717a" />
        <Typography variant="caption" sx={{ color: '#71717a', fontSize: '13.9px' }}>
          Cobalt • {time}
        </Typography>
      </Stack>
      <Typography variant="caption" sx={{ color: '#71717a', fontSize: '13.1px', display: 'block', mb: 1 }}>
        {title}
      </Typography>
      {details && details.map((detail, idx) => (
        <Typography key={idx} variant="caption" sx={{ color: '#71717a', fontSize: '13.1px', display: 'block' }}>
          {detail}
        </Typography>
      ))}
      {actions && (
        <Stack direction="row" spacing={1} className="mt-2">
          {actions.map((action, idx) => (
            <Typography 
              key={idx}
              variant="caption" 
              sx={{ 
                color: '#d4d4d8',
                fontSize: '13.1px',
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' }
              }}
            >
              {action}
            </Typography>
          ))}
        </Stack>
      )}
    </Box>
  );
}