import React from 'react'
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from "../components/Search";
import "./Home.css"
function Home() {
    return (
        <div className="home">
            
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to ="/about">About</Link>
                    <Link to ="/store">Store</Link>
                </div>
                <div className="home__headerRignt">
                <Link to ="/gamil">gamil</Link>
                <Link to ="/images">Images</Link>
                <AppsIcon/>
                <Avatar/>
                </div>
            </div>
            <div className="home__body">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png" alt=""/>
                <div className="home__inputContainer">
                    <Search hideButtons/>
                </div>
            </div>
        </div>
    )
}

export default Home
