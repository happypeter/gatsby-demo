import React from 'react'

export default ({ pathContext }) => {
  const { slug } = pathContext
  return (
    <div>
      模板文件 {slug}
    </div>
  )
}
