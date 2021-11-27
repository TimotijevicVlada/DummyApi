import React from 'react';

const DetailsSkeleton = () => {

    

    return (
        <div className="details_skeleton">
            <div className="skeleton_img">
                <div className="skeleton_image"></div>
            </div>
            <div className="skeleton_info">
                <div className="skeleton_title_wrapper">
                    <div className="skeleton_title"></div>
                </div>
                <div className="skeleton_text_wrapper">
                    <div className="skeleton_text"></div>
                    <div className="skeleton_text"></div>
                    <div className="skeleton_text"></div>
                </div>
                <div className="skeleton_author">
                    <div className="skeleton_author_image"></div>
                    <div className="skeleton_author_name"></div>
                </div>
                <div className="skeleton_tags">
                    <div className="skeleton_tag"></div>
                    <div className="skeleton_tag"></div>
                    <div className="skeleton_tag"></div>
                </div>
                <div className="skeleton_date">
                    <div className="date"></div>
                </div>
                <div className="skeleton_comments">
                    <div className="skeleton_comm">
                        <div className="skeleton_comm_img"></div>
                        <div className="skeleton_comm_info">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="skeleton_comm">
                        <div className="skeleton_comm_img"></div>
                        <div className="skeleton_comm_info">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="skeleton_comm">
                        <div className="skeleton_comm_img"></div>
                        <div className="skeleton_comm_info">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsSkeleton;
