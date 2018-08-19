import React, { Component } from 'react';
import * as d3 from 'd3';

class TeamCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 0,
      color: 'pink',
    };
    this.circle = React.createRef();
    this._setR = this._setR.bind(this);
    this._setColor = this._setColor.bind(this);
  }

  render() {
    const { circle } = this;
    const { r, color } = this.state;
    return (
      <circle
        ref={circle}
        r={r}
        fill={color}
        stroke="black"
        strokeWidth="1px"
        style={{ cursor: 'pointer' }}
      />
    );
  }

  componentDidMount() {
    const {
      circle: { current },
      _setR,
      _setColor,
    } = this;
    const { i, r, color } = this.props;
    d3.select(current)
      .transition()
      .delay(() => i * 100)
      .duration(500)
      .attr('r', 40)
      .transition()
      .duration(500)
      .style('color', color)
      .attr('r', r)
      .on('end', () => {
        _setR(r);
        _setColor(color);
      });
  }

  componentDidUpdate() {
    const {
      circle: { current },
      _setR,
      _setColor,
    } = this;
    const { r, color } = this.props;
    d3.select(current)
      .transition()
      .duration(1000)
      .style('fill', color)
      .attr('r', r)
      .on('end', () => {
        _setR(r);
        _setColor(color);
      });
  }

  _setR(r) {
    this.setState({ r });
  }

  _setColor(color) {
    this.setState({ color });
  }
}

export default TeamCircle;
