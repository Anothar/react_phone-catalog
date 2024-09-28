import styled from 'styled-components';
import { media } from '../../utils/const';

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  ${media.tablet} {
    gap: 56px;
  }

  ${media.desktop} {
    max-width: 1136px;
    margin-inline: auto;
    gap: 80px;
  }
`;

const TitleStyled = styled.h2`
  font-weight: 800;
  font-size: 32px;
  line-height: 41px;
  margin: 0;
  padding: 24px 16px;
  color: ${({ theme }) => theme.textColor};
  width: 100%;

  ${media.tablet} {
    padding: 32px 24px;
    font-size: 48px;
    line-height: 56px;
    width: 490px;
  }

  ${media.desktop} {
    padding: 56px 32px;
    margin: 0;
    width: 100%;
  }
`;

export { TitleStyled, HomePageStyled };
