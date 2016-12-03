import _ from 'lodash'
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export class Chart extends Component {
  render() {
    function avarage(data) {
      return _.round(_.sum(data) / data.length)
    }

    return (
      <div>
        <Sparklines height={100} width={200} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{avarage(this.props.data)} {this.props.units}</div>
      </div>
    );
  }
}
export default Chart