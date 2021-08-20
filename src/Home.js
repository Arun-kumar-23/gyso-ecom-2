import React from 'react'
import './Home.css'
import SearchIcon from '@material-ui/icons/Search';

function Home({image,title,subtitle}) {
    console.log(image)
    return (
        <div className="home" 
            style={{background:`url(${image}) no-repeat center`,backgroundSize:"cover", height: "90vh"}}>
            <div className="home__card">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <div className="home__input">
                <input placeholder="Search your product from here"/>
                    <div className="home__inputButton">
                        <SearchIcon />
                        <button>Search</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home
