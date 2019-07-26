import { PropTypes } from "prop-types";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.section`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 1000px;
`;

const BackgroundImage = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const FormContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.6);
`;

const FormWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
`;

const SitemapContainer = styled.section``;

const MainFooter1 = ({
  ImageComponent,
  TitleComponent,
  FormComponent,
  SitemapComponent
}) => (
  <Container>
    <BackgroundImage>{ImageComponent}</BackgroundImage>

    <FormContainer>
      <FormWrapper>
        <TitleContainer>{TitleComponent}</TitleContainer>
        {FormComponent}
      </FormWrapper>
    </FormContainer>

    <SitemapContainer>{SitemapComponent}</SitemapContainer>
  </Container>
);

MainFooter1.defaultProps = {
  ImageComponent: <img alt="" src="https://placeimg.com/1920/1080/any" />,
  TitleComponent: <h2>Button</h2>,
  FormComponent: <form />,
  SitemapComponent: <span>Sitemap</span>
};

MainFooter1.propTypes = {
  ImageComponent: PropTypes.element,
  TitleComponent: PropTypes.element,
  FormComponent: PropTypes.element,
  SitemapComponent: PropTypes.element
};

export default MainFooter1;
