/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { H31Title3A, H31Text4 } from "..";
import _config from "../../_config";

const MasterContainer = styled.section`
  position: relative;
  overflow-y: hidden;
  height: 350px;
`;

const Container = styled.section`
  height: calc(100% + 7px);
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-coordinate: 0 0;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: x mandatory;
  flex: 1;
  display: flex;

  max-width: 1440px;
  margin: 0 auto 30px auto;

  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
`;

const ContainerOuter = styled.section`
  display: inline-block;
  padding: 0 15px;
  flex: 0 0 33.33%;
  scroll-snap-align: start;

  @media (max-width: 1199px) {
    flex: 0 0 50%;
  }
  @media (max-width: 767px) {
    padding: 0 calc(8.333% + 15px);
    flex: 0 0 100%;
  }
`;
const ContainerInner = styled.section`
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  @media (max-width: 500px) {
    padding: 30px 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 0;
  @media (max-width: 991px) {
    padding: 15px 0;
  }
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: start;
  padding: 20px 0px;
  @media (max-width: 991px) {
    text-align: center;
  }
`;

const ListButtons = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 0;
  margin: 0 0 60px 0;
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

class Testimonials extends React.Component {
  constructor() {
    super();

    this.testimonialComponents = [{ offsetLeft: 0 }];
    this.slideContainer = { scrollLeft: 0 };
    this.x = 0;

    this.state = {
      slide: 0,
      amount: 3
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
      const lengths = (e.srcElement.scrollWidth / this.testimonialComponents.length);

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
      if (window.innerWidth >= 1200 && amount !== 3) {
        this.setState({ amount: 3 });
      } else if (
        window.innerWidth <= 1199 &&
        window.innerWidth >= 768 &&
        amount !== 2
      ) {
        this.setState({ amount: 2 });
      } else if (window.innerWidth <= 767 && amount !== 1) {
        this.setState({ amount: 1 });
      }
    }
  }

  render() {
    const { slide, amount } = this.state;
    const { testimonials } = this.props;

    return (
      <>
        <MasterContainer>
          <Container
            ref={ref => {
              this.slideContainer = ref;
            }}
          >
            {testimonials.map((testimonial, i) => (
              <ContainerOuter
                ref={ref => {
                  this.testimonialComponents[i] = ref;
                }}
              >
                <ContainerInner>
                  <Wrapper>
                    <TitleContainer
                      css={css`
                        background-color: ${_config.colorSecondary};
                      `}
                    >
                      <H31Title3A>{testimonial.name}</H31Title3A>
                    </TitleContainer>
                    <ParagraphContainer
                      css={css`
                        color: ${_config.colorDarkGrey};
                      `}
                    >
                      <H31Text4>{testimonial.text}</H31Text4>
                    </ParagraphContainer>
                  </Wrapper>
                </ContainerInner>
              </ContainerOuter>
            ))}
          </Container>
        </MasterContainer>

        {this.testimonialComponents.length > amount && (
          <ListButtons>
            {this.testimonialComponents
              .splice(0, this.testimonialComponents.length - amount + 1)
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

Testimonials.defaultProps = {
  testimonials: [
    {
      name: "Bill Rye",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium mi aquam molestie, vel ultricies libero faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium mi a quam molestie, vel ultricies libero faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object)
};

export default Testimonials;
