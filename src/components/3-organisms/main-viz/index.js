import React, { Component } from 'react';
import * as d3 from 'd3';

const processCSV = (csv, key) => {
  const maxValue = d3.max(csv, obj => parseFloat(obj[key]));
  const radiusScale = d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([2, 20]);
  const ybRamp = d3
    .scaleLinear()
    .interpolate(d3.interpolateHcl)
    .domain([0, maxValue])
    .range(['yellow', 'blue']);
  return csv.map(obj => ({
    ...obj,
    color: !key ? 'pink' : ybRamp(obj[key]),
    radius: !key ? '20' : radiusScale(obj[key]),
  }));
};

class MainViz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: '',
    };
    this._handleMouseOver = this._handleMouseOver.bind(this);
    this._handleMouseOut = this._handleMouseOut.bind(this);
  }

  render() {
    const { _handleMouseOver, _handleMouseOut } = this;
    const { datas, selectedTeam, selectedButton, onClick } = this.props;
    const { highlighted } = this.state;
    return (
      <svg width="100%" height="99%">
        <g id="teamG" transform="translate(100, 300)">
          {processCSV(datas, selectedButton).map((data, i) => (
            <g
              key={data.team}
              className="overallG"
              transform={`translate(${i * 50}, 0)`}
              onMouseOver={e =>
                _handleMouseOver({ ...e, __teamName: data.team })
              }
              onMouseOut={_handleMouseOut}
              onClick={e => onClick({ ...e, __teamName: data.team })}
            >
              <circle
                r={data.radius || '20'}
                fill={data.color || 'pink'}
                stroke="black"
                strokeWidth="1px"
                style={{ cursor: 'pointer' }}
              />
              <text
                textAnchor="middle"
                y={highlighted === data.team ? '-30' : '30'}
                fontSize={highlighted === data.team ? '30px' : '10px'}
                pointerEvents="none"
              >
                {data.team}
              </text>
              <image
                xlinkHref={`/images/${data.team}.png`}
                width={selectedTeam === data.team ? '90px' : '45px'}
                height={selectedTeam === data.team ? '40px' : '20px'}
                x={selectedTeam === data.team ? '-44px' : '-22px'}
                y={selectedTeam === data.team ? '68px' : '34px'}
              />
            </g>
          ))}
        </g>
      </svg>
    );
  }

  _handleMouseOver({ __teamName: highlighted }) {
    this.setState({ highlighted });
  }

  _handleMouseOut() {
    this.setState({ highlighted: '' });
  }
}

export default MainViz;
