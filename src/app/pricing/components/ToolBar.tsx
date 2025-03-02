'use client';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography } from '@mui/material';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const tools = [
  { name: 'Paraphraser', icon: '/paraphraser.svg' },
  { name: 'Grammar Check', icon: '/grammar_check.svg' },
  { name: 'Plagiarism Check', icon: '/plagiarism_check.svg' },
  { name: 'AI Humanizer', icon: '/ai_humanizer.svg' },
  { name: 'AI Detector', icon: '/ai_detector.svg' },
  { name: 'Summarizer', icon: '/summarizer.svg' },
  { name: 'Chrome Extension', icon: '/chrome_extension.svg' },
];

const ToolBar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (isDesktop) {
      setPosition(0);
    }
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) {
      let animationFrame: number;
      const speed = 0.5;

      const animate = () => {
        setPosition((prev) => {
          const newPosition = prev - speed;
          const totalWidth = containerRef.current?.scrollWidth ?? 0;

          return newPosition <= -totalWidth / 2 ? 0 : newPosition;
        });

        animationFrame = requestAnimationFrame(animate);
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isDesktop]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        p: 2,
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          gap: 4,
          transform: `translateX(${position}px)`,
          transition: 'none',
          flexWrap: 'nowrap',
          justifyContent: 'center',
        }}
      >
        {(isDesktop ? tools : [...tools, ...tools]).map((tool, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: isDesktop ? 'auto' : '33%',
              textAlign: 'center',
            }}
          >
            <Image src={tool.icon} alt={tool.name} width={18} height={20} />
            <Typography
              variant="body1"
              sx={{
                marginTop: '8px',
                color: '#22293B',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.15px',
                whiteSpace: 'nowrap',
              }}
            >
              {tool.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ToolBar;
