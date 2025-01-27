import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import PostHeader from "./Post/PostHeader"

const PostListWrapper = styled.div`
    display: grid;
    row-gap: 2.25rem;
`

const PostList = ({posts}) => {
    return (
        <PostListWrapper>
            {posts.map((post, index) => {
                const {date, topic, title, slug} = post.frontmatter

                return (
                    <PostHeader
                        key={index}
                        date={date}
                        topic={topic}
                        title={title}
                        slug={slug}
                    />
                )
            })}
        </PostListWrapper>
    )
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostList
