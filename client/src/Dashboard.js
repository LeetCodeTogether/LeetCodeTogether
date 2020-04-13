import React from 'react';
import PieChart from './PieChart.js'
import BarChart from './BarChart.js'
import { Grid } from '@material-ui/core';

class Dashboard extends React.Component {
    render = () => { 
        return(
            <div className="Dashboard">
                <h1>This is the Dashboard!</h1>
                Below are my stats:
                <Grid container spacing={2} justify="center">
                    <Grid item xs={10} md={true}>
                        <PieChart />
                    </Grid>
                    <Grid item xs={10} md={true}>
                        <BarChart />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Dashboard;