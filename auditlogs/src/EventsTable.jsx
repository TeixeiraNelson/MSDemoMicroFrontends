import React, { Component } from "react";

export default class EventsTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('https://localhost:5000/apigateway/EventLogs')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                });
            });
    }
    
    render(){
        var {isLoaded, items} = this.state;

        if(!isLoaded){
            return <div>loading...</div>;
        }

        var total = items.length;
        return (
            <div className="border-8 border-blue-600">
                <h1>Total : {total} events</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Time
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200" >
                    {items.map(( listValue, index ) => {
                        return (
                            <tr key={index}>
                                <td>{listValue.id}</td>
                                <td>{listValue.type}</td>
                                <td>{listValue.time}</td>
                            </tr>
                        );})
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}