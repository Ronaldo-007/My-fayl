import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Contact.css"
import { faStar } from '@fortawesome/free-solid-svg-icons';








class Contact extends React.Component {

    render() {
        return <div className="contact">
            <div className="text-center">
                   <h1>What Clients Say</h1>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur facere, <br/>mollitia pariatur culpa molestias officia rerum.</p>
               </div>
            <div className="row">
                <div className="col-md-6 col-lg-2 col-sm-12 my-3">

                </div>
                <div className="col-md-6 col-lg-4 col-sm-12 look my-3">
                    <div className="column">
                        <div className="card">
                            <div className="card_bg"></div>
                            <div className="pic">
                                <img src="/images/rasm.jpg" alt="" />
                            </div>
                            <div className="description">
                                <h3 className="op">Regina Miles</h3>
                                <h4>Designer</h4>
                                <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar} className="sariq" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar} className="sariq" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar} className="sariq" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar} className="sariq" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar} className="sariq" /></a></li>
                                </ul>
                                <p className="rang">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo saepe voluptates quibusdam, in nesciunt quam non culpa est neque amet voluptatem doloribus fuga delectus maiores vero quae perspiciatis excepturi architecto?</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className=" col-md-6 col-lg-4 col-sm-12 look my-3">
                    <div className="column">
                        <div className="card">
                            <div className="card_bg"></div>
                            <div className="pic">
                                <img src="/images/portrait.jpg" alt="" />
                            </div>
                            <div className="description">
                                <h3 className="op">Regina Miles</h3>
                                <h4>Designer</h4>
                                <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar} className="sariq" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar} className="sariq" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar} className="sariq" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar} className="sariq" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faStar} className="sariq" /></a></li>
                                </ul>
                                <p className="rang">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo saepe voluptates quibusdam, in nesciunt quam non culpa est neque amet voluptatem doloribus fuga delectus maiores vero quae perspiciatis excepturi architecto?</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-2 col-sm-12 my-3">

                </div>

            </div>

        </div>

    }
}

export default Contact;