import React from 'react';


export class GuestAboutUs extends React.Component {


    render(){
        return(<>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a href="/guest" className="mb-0 h4 text-white font-weight-bold">Campus</a>
            <a href="/guest" className="mb-0 h4 text-primary font-weight-bold">Plus</a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <form className="form-inline ">
                    <button className="btn btn-primary btn-sm rounded" onClick={() => this.props.history.push("/login")}>LOG OUT</button>
                </form>
            </div>
            </nav>
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">About Us</span>
            </nav>
            <div className = "p-5 container-fluid container-sm">
                <div className="card mb-1 w-75 mx-auto justify-content-center">
                    <div className = "p-1 jumbotron jumbotron-fluid bg-white text-center">
                        <img src="/homeLogo.png" className=" img-fluid w-25 rounded mx-auto d-block" alt="..."/>  
                    </div>
                    <form className = "justify-content-center p-1 text-primary text-center">
                        <h5 className = "p-4 text-primary text-center"> We are college students that worked to develop an 
                        application to improve the college experience. Our goal is to consolidate all of a student's assignments
                         for each course in order to alleviate the stress that goes with school.</h5>
                        <p>We hope you enjoy our product!</p>
                    </form>
                </div>
            </div>
        </>);
    }
}