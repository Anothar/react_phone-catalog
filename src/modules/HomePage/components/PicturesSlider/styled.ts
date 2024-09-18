import styled from 'styled-components';
import { media } from '../../../../utils/const';

interface ImglStyledProps {
  positionTr: number;
}

interface ButStyledProps {
  isActive: boolean;
}

const PicturesSliderStyled = styled.div`
  ${media.tablet} {
    padding-inline: 24px;
  }

  ${media.desktop} {
    padding-inline: 0;
  }
`;

const MainContentStyled = styled.div`
  margin-bottom: 8px;

  ${media.tablet} {
    display: flex;
    gap: 16px;
    height: 100%;
  }
`;

const ButtonSliderStyled = styled.div`
  display: none;

  ${media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    border: 1px solid #b4bdc3;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

const CarouselStyled = styled.div`
  display: flex;
  overflow: hidden;
`;

const ImglStyled = styled.img<ImglStyledProps>`
  width: 100%;
  z-index: -1;

  transform: ${({ positionTr }) => `translateX(-${positionTr * 100}%)`};
`;

const ButtonsStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const ButtonBlockStyled = styled.div`
  padding: 10px 5px;
  cursor: pointer;
`;

const ButStyled = styled.div<ButStyledProps>`
  width: 14px;
  height: 4px;
  background-color: ${({ isActive }) => (isActive ? '#313237' : '#E2E6E9')};
`;

export {
  CarouselStyled,
  ImglStyled,
  ButtonsStyled,
  ButtonBlockStyled,
  ButStyled,
  PicturesSliderStyled,
  MainContentStyled,
  ButtonSliderStyled,
};
