import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList
  return (
    <li>
      <div className="list-container">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
