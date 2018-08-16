import React from "react"
import PropTypes from "prop-types"

// components
import PostHeader from "./PostHeader"

// styles
import "../scss/PostList.scss"


const PostList = ({posts}) => {

    return (

        <div className="post-list">

            {posts.map(
                post => (
                    <PostHeader
                        key={post.id}
                        date={post.date}
                        topic={post.topic.name}
                        title={post.title}
                        slug={post.slug}
                    />
                )
            )}

        </div>

    )

}


PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}


// export
export default PostList
