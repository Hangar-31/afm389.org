/* eslint-disable consistent-return */
const path = require("path");

const urlMaker = (pathWay) => {
  return `/${pathWay.split("/")[pathWay.split("/").length - 2]}/${
    pathWay.split("/")[pathWay.split("/").length - 1].split(".")[0]
  }`;
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogStoriesOfCareTemplate = path.resolve(
    "src/templates/NewsAndEvents.js"
  );

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 80)
            fileAbsolutePath
            html
            id
            fields {
              path
            }
            frontmatter {
              title
              date
              image {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges.filter((post) =>
      post.node.fileAbsolutePath.includes("static/news-and-articles")
    );

    posts.forEach((post, i) => {
      const nextNext =
        typeof posts[i + 2] === "undefined" ? null : posts[i + 2].node;
      const next =
        typeof posts[i + 1] === "undefined" ? null : posts[i + 1].node;
      const previous =
        typeof posts[i - 1] === "undefined" ? null : posts[i - 1].node;
      const previousPrevious =
        typeof posts[i - 2] === "undefined" ? null : posts[i - 2].node;

      createPage({
        path: urlMaker(post.node.fileAbsolutePath),
        id: post.node.id,
        component: blogStoriesOfCareTemplate,
        context: {
          nextNext,
          next,
          previous,
          previousPrevious,
        },
      });
    });
  });
};

// CMS fields that may be empty in every file, so Gatsby can't infer their types.
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
    type MarkdownRemarkFrontmatter {
      banner: String
      request_form: String
      usage_form: String
      linkedin: String
    }
  `);
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `path`,
      value: urlMaker(node.fileAbsolutePath),
    });
  }
};

// On Netlify deploy previews, point the CMS at the preview's own branch so it
// loads that branch's content and test saves never reach the live site.
exports.onPostBuild = () => {
  const { CONTEXT, HEAD } = process.env;
  if (!HEAD || (CONTEXT !== "deploy-preview" && CONTEXT !== "branch-deploy")) {
    return;
  }
  const fs = require("fs");
  const configPath = path.resolve("public/admin/config.yml");
  const config = fs.readFileSync(configPath, "utf8");
  fs.writeFileSync(
    configPath,
    config.replace(
      "  name: git-gateway\n",
      `  name: git-gateway\n  branch: ${HEAD}\n`
    )
  );
};
