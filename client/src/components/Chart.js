import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Tooltip,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation, EventTracker } from '@devexpress/dx-react-chart';
import algorithms from '../test/algorithms.json';

const userData = JSON.parse(JSON.stringify(algorithms));
const data = [
    {name: "Easy Questions", n: userData.ac_easy},
    {name: "Medium Questions", n: userData.ac_medium},
    {name: "Hard Questions", n: userData.ac_hard},
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
        <Paper>
            <Chart
            data={chartData}
            >
            <PieSeries
                valueField="n"
                argumentField="name"
            />
            <Title
                text="Questions Done"
            />
            <EventTracker />
            <Tooltip />
            <Legend />
            <Animation />
            </Chart>
        </Paper>
    );
  }
}
