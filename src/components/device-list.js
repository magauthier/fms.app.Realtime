import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const DeviceTag = props => (
    <tr>
        <td>{props.device.FleetOwnerID}</td>
        <td>{props.device.AstusSerialNumber}</td>
        <td>{props.device.SKU}</td>
        <td>{props.device.CreatedDate}</td>
        <td>{props.device.CreatedUser}</td>
        <td>
            <Link to={"/location/"+props.device.AstusSerialNumber}>Location</Link>
        </td>
    </tr>
)

export default class DeviceList extends Component {

    constructor(props) {
        super(props);

        this.state = { devices: [] };
        console.log('constructor');
    }

    componentDidMount() {
        axios.get('http://localhost:5000/devices')
            .then(response => {
                this.setState({ devices: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    toList() {
        return this.state.devices.map( (device, i) => 
             <DeviceTag device={device} key={i} />
        );
    }

    render() {
        return (
            <div>
                <h3>Your Devices</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>FleetOwnerID</th>
                            <th>AstusSerialNumber</th>
                            <th>SKU</th>
                            <th>CreatedDate</th>
                            <th>CreatedUser</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.toList() }
                    </tbody>
                </table>
            </div>
        )
    }
}