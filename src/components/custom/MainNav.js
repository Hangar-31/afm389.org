import React from 'react'
import {PropTypes} from 'prop-types'
/** @jsx jsx*/
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import _config from '../_config';
import ImgLogo from '../images/logos/ImgLogo';
import SiteTitle from './text/SiteTitle';
import MainLink from './links/MainLink';
import SocialBar from './SocialBar';
import ButtonHollow from './buttons/ButtonHollow';

const logoWidth = 115

// Styled Components
const Container = styled.section`
  position: relative;
  width: 100%;
  height: 150px;
  background: linear-gradient(
    180deg,
    ${_config.colorPrimary} 50%,
    ${_config.colorSecondary} 50.0001%
  );
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`

// Logo

const ContainerLogo = styled(Link)`
  width: ${logoWidth}px;
  height: ${logoWidth}px;
  img {
    width: 100%;
    height: 100%;
  }
`

// Grouping

const Group = styled.div`
  width: calc(100% - ${logoWidth}px - 30px);
  padding-left: 30px;
  height: 100%;
`

// Navigation Area

const ContainerNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  
  width: 100%;
  height: 50%;
`

const GroupNav1 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  height: 100%;
`

const GroupNav2 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  height: 100%;
`

const ListLinks = styled.ul`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  height: 100%;
  padding: 0;
  margin: 0;
  margin-left: 15px;
  list-style: none;
`;

const ItemLink = styled.li`
  margin: 0 20px;
  height: 100%;
`;

// Action Area

const ContainerAction = styled.section`
  display: flex;
  flex-wrap: wrap;
  
  width: 100%;
  height: 50%;
`

export default ({ children }) => (
  <Container>
    <Wrapper>

      <ContainerLogo>
        <ImgLogo/>
      </ContainerLogo>

      <Group>
        <ContainerNav>
          <GroupNav1>

          <SiteTitle css={css`
            position: relative;
            text-align: center;
          `}
          >
            CFMA Local 389
            <br />
            <span
              css={css`
                position: absolute;
                font-size: 0.625rem;
                white-space: none;
                width: 120%;
                left: -10%;
                right: 0;
                margin: 0 auto;
              `}
            >
              Central FL Musicians Association
            </span>

            </SiteTitle>

            <ListLinks>
              {_config.mainNav.map((link, i) => (
                <ItemLink>
                  <MainLink to={link.to} text={link.name} />
                </ItemLink>
              ))}
            </ListLinks>
          </GroupNav1>

          <GroupNav2>
            <SocialBar />
            <ButtonHollow text="Member Log In"/>
          </GroupNav2>

        </ContainerNav>

        <ContainerAction>

        </ContainerAction>
      </Group>
    </Wrapper>
  </Container>
)