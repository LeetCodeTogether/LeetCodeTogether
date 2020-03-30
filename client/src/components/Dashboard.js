import React from 'react';
import algorithms from '../test/algorithms.json';
import Chart from './Chart.js'

class Dashboard extends React.Component {
    render = () => {
        const userData = JSON.parse(JSON.stringify(algorithms));
        const displayUserData = Object.keys(userData).map((key) => {
            return(
                <div className="something">
                    {key}: {JSON.stringify(userData[key])}
                </div>
            )
        }) 
        return(
            <div className="Dashboard">
                <h1>This is the Dashboard!</h1>
                Below are my stats:
                {/* {displayUserData} */}
                < Chart />
            </div>
        )
    }
}
export default Dashboard;