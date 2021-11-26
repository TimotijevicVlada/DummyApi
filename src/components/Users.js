import React from 'react'

const Users = ({users}) => {
    return (
        <div className="users">
            {users.map(item => (
                <div className="user" key={item.id}>
                    <div className="user_image">
                        <img src={item.picture} alt={item.firstName} />
                    </div>
                    <div className="user_name">
                        {item.title} {item.firstName} {item.lastName}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Users;
