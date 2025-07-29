import styled from 'styled-components';
import { Box } from '@mui/material';

type SlideTrackProps = {
  translateX: number;
};

type NavigationButtonProps = {
  direction: 'prev' | 'next';
};

export const SliderContainer = styled(Box)`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const SlideTrack = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'translateX',
})<SlideTrackProps>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => props.translateX}px);
`;

export const SlideItem = styled.div`
  flex: 0 0 auto;
  margin-right: 16px;
`;

export const NavigationButton = styled.button<NavigationButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  ${props => (props.direction === 'prev' ? 'left: 10px;' : 'right: 10px;')}
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
