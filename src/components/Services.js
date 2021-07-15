import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
    return (
        <div className="services">
			<h1 className="py-5">My Services</h1>
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-sm-6">
								<div className="box">
								<div className="circle">
								<FontAwesomeIcon  className="icons" icon={faDesktop} size="2x"/>
								</div>
								<h3> Web Design </h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
								</div>	
								</div>
				<div className="col-xl-3 col-sm-6">
		<div className="box">
										<div className="circle">
								<FontAwesomeIcon className="icons" icon ={faFileCode} size="2x"/>
								</div>
		<h3> Web Development </h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
		</div>
		</div>
				<div className="col-xl-3 col-sm-6">
		<div className="box">
										<div className="circle">
								<FontAwesomeIcon className="icons" icon ={faFacebookF} size="2x"/>
								</div>
		<h3> Facebook Ads SMM </h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
		</div>
		</div>
				<div className="col-xl-3 col-sm-6">
		<div className="box">
										<div className="circle">
								<FontAwesomeIcon className="icons" icon ={faGoogle} size="2x"/>
								</div>
		<h3> Google Ads </h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
		</div>
		</div>
		</div>
		</div>
		</div>	
    )
}

export default Services