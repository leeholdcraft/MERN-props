import React, {Component} from "react";

class PersonCard extends Component {
    render () {
        return (
            <div className="personcard">
                <h1>{this.props.last}, {this.props.first}</h1>
                <h3>Age : {this.props.age}</h3>
                <h3>Haircolor: {this.props.color}</h3>
            </div>
        );
    }
}

export default PersonCard;