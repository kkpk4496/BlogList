import './index.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props

    return (
      <div className="container">
        <ul>
          {blogsList.map(eachList => (
            <BlogItem key={eachList.id} blogsList={eachList} />
          ))}
        </ul>
      </div>
    )
  }
}

export default BlogList
