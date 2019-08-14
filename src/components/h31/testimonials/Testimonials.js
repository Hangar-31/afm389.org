/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { H31Title3A, H31Text4 } from "..";
import _config from "../../_config";

const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;

  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  margin-bottom: 60px;
  scroll-behavior: smooth;

  transition: 1s;

  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  & {
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }
`;

const ContainerInner = styled.section`
  display: inline-block;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  margin: 0 15px;
  white-space: normal;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
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
  margin-bottom: 60px;
`;

const ItemButton = styled.li`
  margin: 0 5px;
  list-style: none;
`;

const Button = styled.div`
  width: 5px;
  border-radius: 50%;
  height: 5px;
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
    this.slideContainer.addEventListener("scroll", e => {
      e.preventDefault();
    });
    this.slideContainer.addEventListener("DOMMouseScroll", e => {
      e.preventDefault();
    });
    // this.slideContainer.addEventListener("wheel", e => {
    //   e.preventDefault();
    // });
    this.slideContainer.addEventListener("touchmove", e => {
      e.preventDefault();
    });

    // Mouse Events
    this.slideContainer.addEventListener("mousedown", e => {
      this.x = e.clientX;
    });
    this.slideContainer.addEventListener("mouseup", e => {
      const { slide, amount } = this.state;
      if (
        e.clientX > this.x &&
        slide < this.testimonialComponents.length - amount
      ) {
        this.setState({ slide: slide + 1 });
      } else if (e.clientX < this.x && slide > 0) {
        this.setState({ slide: slide - 1 });
      }
    });

    // Touch Events
    this.slideContainer.addEventListener("touchstart", e => {
      this.x = e.touches[0].clientX;
    });
    this.slideContainer.addEventListener("touchend", e => {
      const { slide, amount } = this.state;
      if (
        e.changedTouches[0].clientX > this.x &&
        slide < this.testimonialComponents.length - amount
      ) {
        this.setState({ slide: slide + 1 });
      } else if (e.changedTouches[0].clientX < this.x && slide > 0) {
        this.setState({ slide: slide - 1 });
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

    this.slideContainer.scrollLeft =
      (this.slideContainer.scrollWidth / this.testimonialComponents.length -
        1) *
      slide;

    return (
      <>
        <Container
          ref={ref => {
            this.slideContainer = ref;
          }}
        >
          {testimonials.map((testimonial, i) => (
            <ContainerInner
              ref={ref => {
                this.testimonialComponents[i] = ref;
              }}
              css={css`
                width: calc(100% / ${amount} - 30px);
                @media (max-width: 767px) {
                  margin: 0 calc(8.33% + 15px);
                  width: calc(100% / ${amount} - 16.67% - 30px);
                }
              `}
            >
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
          ))}
        </Container>

        {this.testimonialComponents.length + 1 > amount && (
          <ListButtons>
            {this.testimonialComponents
              .splice(0, this.testimonialComponents.length - amount + 1)
              .map((c, i) => (
                <ItemButton>
                  <Button
                    onClick={() => {
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
