/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import { H31BlogCard1 } from "..";
import _config from "../../_config";

const MasterContainer = styled.section`
  position: relative;
  overflow-y: hidden;
  padding-top: 15px;
`;

const Container = styled.section`
  position: relative;
  height: calc(100% + 7px);
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-coordinate: 0 0;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: x mandatory;
  flex: 1;
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100% - 35px);
  background: linear-gradient(90deg, #6da55f 0%, #164f4b 100%);
  @media (max-width: 1199px) {
    height: calc(100% - 50px);
  }
`;

const ContainerOuter = styled.section`
  display: inline-block;
  padding: 0 15px 20px 15px;
  flex: 0 0 33.33%;
  scroll-snap-align: start;

  @media (max-width: 1199px) {
    flex: 0 0 50%;
  }
  @media (max-width: 767px) {
    padding-left: calc(8.333% + 15px);
    flex: 0 0 80%;
    &:last-child {
      padding-right: calc(20% + 15px);
      flex: 0 0 100%;
    }
  }
`;
const ContainerInner = styled.section``;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListButtons = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 0;
  margin: 30px 0;
`;

const ItemButton = styled.li`
  margin: 0 5px;
  list-style: none;
`;

const Button = styled.div`
  width: 5px;
  border-radius: 50%;
  height: 5px;
  cursor: pointer;
  background-color: ${_config.colorDarkGrey};
`;

class SectionCBAS1 extends React.Component {
  constructor() {
    super();

    this.articleComponents = [{ offsetLeft: 0 }];
    this.slideContainer = { scrollLeft: 0 };
    this.x = 0;

    this.state = {
      slide: 0,
      amount: 4
    };
  }

  componentWillMount() {
    this.resize();
  }

  componentDidMount() {
    // Mouse Events
    this.slideContainer.addEventListener("scroll", e => {
      const { slide } = this.state;
      // eslint-disable-next-line prettier/prettier
      const lengths = (e.srcElement.scrollWidth / this.articleComponents.length);

      const x = Math.round(e.srcElement.scrollLeft / lengths);
      if (x !== slide) {
        this.setState({ slide: x });
      }
    });

    // Screen Resize Events
    window.addEventListener("resize", () => {
      this.resize();
    });

    this.setState({});
  }

  resize() {
    // Screen Resize Events
    if (typeof window !== "undefined") {
      const { amount } = this.state;
      if (window.innerWidth >= 1200 && amount !== 4) {
        this.setState({ amount: 3 });
      } else if (window.innerWidth <= 1199 && window.innerWidth >= 768) {
        this.setState({ amount: 2 });
      } else if (window.innerWidth <= 767 && amount !== 1) {
        this.setState({ amount: 1 });
      }
    }
  }

  render() {
    const { slide, amount } = this.state;
    const { articles } = this.props;

    return (
      <>
        <MasterContainer>
          <Background />
          <Container
            ref={ref => {
              this.slideContainer = ref;
            }}
          >
            {articles.map((article, i) => (
              <ContainerOuter
                ref={ref => {
                  this.articleComponents[i] = ref;
                }}
              >
                <ContainerInner>
                  <Wrapper>
                    <H31BlogCard1 hover={false} article={article} />
                  </Wrapper>
                </ContainerInner>
              </ContainerOuter>
            ))}
          </Container>
        </MasterContainer>

        {this.articleComponents.length > amount && (
          <ListButtons>
            {this.articleComponents
              .splice(0, this.articleComponents.length - amount + 1)
              .map((c, i) => (
                <ItemButton>
                  <Button
                    onClick={() => {
                      this.slideContainer.scrollLeft = c.scrollWidth * i;
                      this.setState({ slide: i });
                    }}
                    css={css`
                      background-color: ${slide === i
                        ? _config.colorSecondary
                        : _config.colorLightGrey};
                    `}
                  />
                </ItemButton>
              ))}
          </ListButtons>
        )}
      </>
    );
  }
}

SectionCBAS1.defaultProps = {
  articles: {}
};

SectionCBAS1.propTypes = {
  articles: PropTypes.objectOf(PropTypes.object)
};

export default SectionCBAS1;
