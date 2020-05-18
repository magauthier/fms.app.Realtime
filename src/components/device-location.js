import React, { Component } from 'react';
import axios from 'axios';


export default class DeviceLocation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            AstusSerialNumber: 0,
            Location: '',
            Speed: 0,
            State: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/devices/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
                this.setState({
                    AstusSerialNumber: response.data.AstusSerialNumber,
                    Location: response.data.Location,
                    Speed: response.data.Speed,
                    State: response.data.State
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <h1>{this.state.AstusSerialNumber}</h1>
                <h2>{this.state.Location}</h2>
                <div>{this.state.Speed.toFixed(0)} km/h</div>
                <div>{this.state.State}</div>
            </div>
        )
    }
}