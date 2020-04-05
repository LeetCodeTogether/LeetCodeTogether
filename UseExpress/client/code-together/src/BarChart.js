import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  {name: "Easy Questions", n: 5},
  {name: "Medium Questions", n: 8},
  {name: "Hard Questions", n: 2},
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

          <BarSeries
            valueField="n"
            argumentField="name"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
