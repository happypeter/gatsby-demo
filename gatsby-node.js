const path = require(`path`)

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  createPage({
    path: '/2',
    component: path.resolve(`./src/templates/blog-post.js`)
  })
  console.log('createPages...')
}
