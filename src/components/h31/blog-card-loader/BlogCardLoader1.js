import React from "react";
import { css } from "@emotion/core";

import ImgHome1 from "../../images/_home/ImgHome1";
import ImgHome2 from "../../images/_home/ImgHome2";
import ImgHome3 from "../../images/_home/ImgHome3";
import ImgHome4 from "../../images/_home/ImgHome4";
import {
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31BlogCard1
} from "..";
import _config from "../../_config";

// Data
const blogs = [
  {
    image: <ImgHome1 />,
    title: "2019 DISNEY OPEN CALL AUDITIONS",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome2 />,
    title: "ORLANDO MUSICIANS CONFERENCE",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome3 />,
    title: "10 TIPS FOR LIVE PERFORMANCES",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome4 />,
    title: "CFMA MAY 12th MUSICIANS SOCIAL",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome1 />,
    title: "2019 DISNEY OPEN CALL AUDITIONS",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome2 />,
    title: "ORLANDO MUSICIANS CONFERENCE",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome3 />,
    title: "10 TIPS FOR LIVE PERFORMANCES",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome4 />,
    title: "CFMA MAY 12th MUSICIANS SOCIAL",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet.",
    date: "May 15, 2019",
    link: "/"
  }
];

export default class BlogCardLoader1 extends React.Component {
  constructor() {
    super();

    this.state = {
      loadAmount: 7
    };
  }

  onClickLoadMore() {
    let { loadAmount } = this.state;
    loadAmount += 7;
    this.setState({ loadAmount });
  }

  render() {
    const { loadAmount } = this.state;

    return (
      <H31LayoutContainer
        css={css`
          margin: 60px 0 150px 0;
        `}
        fluid
        as="section"
      >
        <H31LayoutRow>
          {blogs.slice(0, loadAmount).map((blog, i) => (
            <>
              <H31LayoutCol md={3}>
                <H31BlogCard1
                  overlayColor="rgba(243, 149, 8, 0.84)"
                  ImageComponent={blog.image}
                  title={blog.title}
                  text={blog.text}
                  link={blog.link}
                  linkText="Read More"
                  date={blog.date}
                />
              </H31LayoutCol>
              {/* {i === loadAmount && <H31LayoutCol md={3} />} */}

              {(i + 1) % 4 === 0 && i + 1 !== blogs.length && (
                <H31LayoutCol md={12}>
                  <div
                    css={css`
                      width: 100%;
                      height: 1px;
                      margin: 30px 0;
                      background-color: ${_config.colorLightGrey};
                    `}
                  />
                </H31LayoutCol>
              )}
            </>
          ))}
        </H31LayoutRow>
      </H31LayoutContainer>
    );
  }
}
