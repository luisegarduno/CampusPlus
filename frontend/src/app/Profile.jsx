import React from 'react';
//import './Profile.css';


export class Profile extends React.Component {
   

    switchPage(pagename) {
        this.props.switchPage(pagename);
    }

    render(){
        return(
            <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" id = "image" />
                    </div>
                    <div class="col-sm-6 col-md-8" id = "info">
                        <div class = "row">
                        <h1 > Profile </h1>
                        <input type="submit" className="fadeIn fourth" value="Edit Profile" id = "button"></input>
                    </div>
                       
                        <h3>Name</h3>
                        <br />
                        <br />
                        <br />
                        <h3>Major</h3>
                        <br />
                 
                        <br />
                        <br />
                        <br />
                        <br />
               
                        <small><cite title="San Francisco, USA">San Francisco, USA <i class="glyphicon glyphicon-map-marker">
                        </i></cite></small>
                        <p>
                            <i class="glyphicon glyphicon-envelope"></i>email@example.com
                            <br />
                     
                            <i class="glyphicon glyphicon-gift"></i>June 02, 1988</p>
                     
 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        );
    }

}