import {
  CountStyled,
  HeaderStyled,
  ListItemStyled,
  LogoStyled,
  MenuBoxStyled,
  MenuImgStyled,
  MenuStyled,
  NavLinkStyled,
  NavListStyled,
  NavStyled,
} from './styled';
import logo from '../../icons/Logo.png';
import logo2 from '../../icons/Logo2.png';
import { useState } from 'react';
import { themeMap, useTheme } from '../Themes/ThemeProvider';
import {
  BURGERMENU_SVG,
  CLOSING_SVG,
  LIKE_SVG,
  SHOPPING_SVG,
} from '../../utils/SVG';
import { useTranslation } from 'react-i18next';
import { StrCode } from '../../utils/enums';
import { useAppSelector } from '../../hooks/hookStore';
import SearchForm from './SerchBar/SerchBar';

export const Header = () => {
  const [isManuActive, setIsActiveMenu] = useState(false);
  const { theme } = useTheme();
  const themeKeys = Object.keys(themeMap) as Array<keyof typeof themeMap>;
  const { t } = useTranslation();
  const { backetsId } = useAppSelector(state => state.backets);
  const { favoritId } = useAppSelector(state => state.favorit);

  const backsetCount = backetsId.length;
  const favoritCount = favoritId.length;

  const variantLogo = () => {
    const themeVariant =
      themeKeys.find(key => themeMap[key] === theme) || 'White';

    switch (themeVariant) {
      case 'White': {
        return logo;
      }

      case 'Dark': {
        return logo2;
      }

      default: {
        return logo;
      }
    }
  };

  return (
    <HeaderStyled>
      <LogoStyled>
        <img alt="logo" src={variantLogo()} />
      </LogoStyled>

      <MenuStyled
        isMenu={true}
        onClick={() => setIsActiveMenu(prevValue => !prevValue)}
      >
        {isManuActive ? (
          <MenuImgStyled>
            <CLOSING_SVG />
          </MenuImgStyled>
        ) : (
          <MenuImgStyled>
            <BURGERMENU_SVG />
          </MenuImgStyled>
        )}
      </MenuStyled>

      <NavStyled isActive={isManuActive}>
        <NavListStyled>
          <ListItemStyled>
            <NavLinkStyled to="/">{t(StrCode.Home)}</NavLinkStyled>
          </ListItemStyled>

          <ListItemStyled>
            <NavLinkStyled to="/phones">{t(StrCode.Phones)}</NavLinkStyled>
          </ListItemStyled>

          <ListItemStyled>
            <NavLinkStyled to="/tablets">{t(StrCode.Tablets)}</NavLinkStyled>
          </ListItemStyled>

          <ListItemStyled>
            <NavLinkStyled to="/accessories">
              {t(StrCode.Accessories)}
            </NavLinkStyled>
          </ListItemStyled>
        </NavListStyled>

        <MenuStyled isActive={!isManuActive} isMenu={false}>
          <MenuBoxStyled>
            <NavLinkStyled to="/favorites" isIcon={true}>
              <MenuImgStyled>
                <LIKE_SVG />
              </MenuImgStyled>

              {!!favoritCount && <CountStyled>{favoritCount}</CountStyled>}
            </NavLinkStyled>
          </MenuBoxStyled>

          <MenuBoxStyled>
            <NavLinkStyled to="/cart" isIcon={true}>
              <MenuImgStyled>
                <SHOPPING_SVG />
              </MenuImgStyled>

              {!!backsetCount && <CountStyled>{backsetCount}</CountStyled>}
            </NavLinkStyled>
          </MenuBoxStyled>
        </MenuStyled>
      </NavStyled>

      <SearchForm />
    </HeaderStyled>
  );
};
