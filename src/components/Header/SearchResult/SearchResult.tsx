import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hookStore';
import { ButtonsStyled, ImgStyled, NoResultStyled, PriceStyled, SearchItemsStyled, SearchListStyled, SearchResultStyled } from './styled';
import { Button } from '../../Button/Button';
import { setIsFocused, setSearchValue } from '../../../features/core';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const SearchResult: React.FC = () => {
  const { products } = useAppSelector(state => state.products);
  const { searchValue } = useAppSelector(state => state.core);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = () => {
    if (searchValue === '') {
      return [];
    }

    return products
      .filter(item => {
        switch (pathname) {
          case '/phones':
            return item.category === 'phones';
          case '/tablets':
            return item.category === 'tablets';
          case '/accessories':
            return item.category === 'accessories';
          default:
            return true;
        }
      })
      .filter(item => {
        return item.name
          .replace(/\s+/g, '')
          .toLowerCase()
          .includes(
            searchValue
              .replace(/\s+/g, '')
              .toLowerCase()
          );
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const handleClearSearch = () => {
    dispatch(setSearchValue(''));
    dispatch(setIsFocused(false));
  }

  const handleSearch = (path = 'phones') => {
    switch (pathname) {
      case '/phones':
        searchParams.set('search', searchValue);
        setSearchParams(searchParams);
        dispatch(setSearchValue(''));
        dispatch(setIsFocused(false));
        break;
      case '/tablets':
        searchParams.set('search', searchValue);
        setSearchParams(searchParams);
        dispatch(setSearchValue(''));
        dispatch(setIsFocused(false));
        break;
      case '/accessories':
        searchParams.set('search', searchValue);
        setSearchParams(searchParams);
        dispatch(setSearchValue(''));
        dispatch(setIsFocused(false));
        break;
      default:
        dispatch(setSearchValue(''));
        dispatch(setIsFocused(false));
        navigate(`/${path}?search=${searchValue}`);
        break;
    }
  };

  const isProductPathname = pathname === '/phones' || pathname === '/tablets' || pathname === '/accessories';

  return (
    <SearchResultStyled isActive={!!searchValue}>
        {handleInputChange().length ? (
          <SearchListStyled>
            {handleInputChange().map((item) => (<SearchItemsStyled key={item.id}>
              <ImgStyled src={item.image}/>

              {item.name}

              <PriceStyled>{`${item.price}$`}</PriceStyled>
            </SearchItemsStyled>))}
          </SearchListStyled>
        ) : (
          <NoResultStyled>No results...</NoResultStyled>
        )}

      <ButtonsStyled>
        {!!isProductPathname ? (
          <Button variant='dark' onFunc={handleSearch}>See all</Button>
        ) : (
          <>
            <Button variant='dark' onFunc={() => handleSearch('phones')}>See phones</Button>
            <Button variant='dark' onFunc={() => handleSearch('tablets')}>See tablets</Button>
            <Button variant='dark' onFunc={() => handleSearch('accessories')}>See accesories</Button>
          </>
        )}
        <Button variant='white' onFunc={handleClearSearch}>Clear</Button>
      </ButtonsStyled>
    </SearchResultStyled>
  );
};

export default SearchResult;
