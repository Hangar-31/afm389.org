/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import _config from "../../_config";

import { H31Link2, H31Title4B } from "../index";

const Container = styled.section`
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  max-width: 1440px;
`;

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 2fr;
  grid-gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
`;

const List = styled.ul`
  grid-column: 1fr;
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 15px;
  line-height: 1.25;
`;

const Sitemap1 = () => (
  <Container>
    <Wrapper>
      {_config.sitemapNav.map(item => (
        <List key={item.title}>
          <Item>
            <H31Title4B>{item.title}</H31Title4B>
          </Item>
          {item.links.map(link => (
            <Item key={link.name}>
              <H31Link2 to={link.to}>{link.name}</H31Link2>
            </Item>
          ))}
        </List>
      ))}
    </Wrapper>
  </Container>
);

export default Sitemap1;
