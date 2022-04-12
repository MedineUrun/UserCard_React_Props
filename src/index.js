import React from "react";
import ReactDOM from "react-dom";
import profile1 from './image/images1.jpg'
import profile2 from './image/images2.jpg'
import profile3 from './image/images3.jpg'
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {

    return (
        <div className="ui comments">
            <UserCard>
                hgsadghdsahgdshgj
            </UserCard>
            <UserCard>
            <SingleComment
             name='Alex' 
             date='Today at 5:00 PM' 
             text='İt is amazing'
             image={profile1}
             />
            </UserCard>
            <UserCard>
            <SingleComment 
            name='Sarah' 
            date='Today at 20:00 PM'
            text='Beautiful'
            image={profile1}
            />
            </UserCard>
            <UserCard>
            <SingleComment 
            name='Leonel' 
            date='Today at 8:00 PM' 
            text='Thanks'
            image={profile3}
            />
            </UserCard>
        </div>
    )

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)