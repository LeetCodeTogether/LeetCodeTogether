import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation, EventTracker } from '@devexpress/dx-react-chart';


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
    };
  }

  render() {
    const chartData = this.state.data;

    return (
      <Paper>
        <Chart
          data={chartData}
          rotated
          height='150'
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            valueField="n"
            argumentField="name"
          />
          <Animation />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
    );
  }
}
