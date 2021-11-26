import React from 'react'

const PostSkeleton = () => {

    const skeletonNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    
    return (
        <div className="post_skeleton">
            {skeletonNum.map(item => (
                <div className="skeleton_item" key={item}>
                    <div className="skeleton_image"></div>
                    <div className="skeleton_info">
                        <div className="skeleton_title"></div>
                        <div className="skeleton_lower">
                            <div className="skeleton_desc"></div>
                            <div className="skeleton_keyword"></div>
                            <div className="skeleton_author">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostSkeleton;
