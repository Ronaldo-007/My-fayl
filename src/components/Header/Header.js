import React from 'react';
import "./Header.css"








class Header extends React.Component {

    render() {
        return <div className="text_box py-5 my-5">
            <h1 className=" my-5">Creating a Beautifull & Usefull Solutitons</h1>
            <p>We know how large objects will act,but things on a
                small scale just do not act that way.
            </p>
            <div className="d-flex align-items-center justify-content-center my-5">
                <button className="hero_btn mx-3">Get Quote Now</button>

                <button className="hero_btn">Learn More</button>
            </div>

        </div>


    }
}

export default Header;