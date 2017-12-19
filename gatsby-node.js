const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(createFilePath({ node, getNode }))
  }
}

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const slugs = ['page1', 'page2']
  slugs.forEach(
    slug => {
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug
        }
      })
    }
  )
}
