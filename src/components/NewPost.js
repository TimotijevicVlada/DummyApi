import React from 'react';

const NewPost = () => {
    return (
        <div className="newPost">
            <form className="newpost_form">
                <div className="newpost_title">
                    <h3>Create new post</h3>
                </div>
                <div className="newpost_content">
                     <div>
                        <input type="text" placeholder="Create title"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Create text"/>
                    </div>
                    <div>
                        <i class="fas fa-plus-circle"></i>
                        <span>Add photo</span>
                    </div>
                    <div className="create_post_btn">
                        <button>Create post</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewPost;
