import React, { Component } from "react";

export default class ChartTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: null,
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('https://localhost:5000/apigateway/Statistics')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    item: json
                });
            });
    }
    
    render(){

        var {isLoaded, item} = this.state;

        if(!isLoaded){
            return <div>Loading ...</div>;
        }

        var total = item.authenticCount + item.suspectCount;
        return (
            <div className="border-8 border-green-600">
                <h1>Total : {total}</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Authentic
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Suspect
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200" >
                        <tr>
                            <td>{(item.authenticCount/total*100).toFixed(2)} %</td>
                            <td>{(item.suspectCount/total*100).toFixed(2)} %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}