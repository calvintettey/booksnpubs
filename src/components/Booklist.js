import React from "react";

class Booklist extends React.Component {

    constructor(props) {
        super(props);
    };



    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.pub}</h3>
            </div>
        );
    }
}


export default Booklist;