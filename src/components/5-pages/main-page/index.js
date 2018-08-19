import React, { Component } from 'react';
import * as d3 from 'd3';
import MainTemplate from '../../4-templates/main-template';
import MainHeader from '../../3-organisms/main-header';
import MainAttributes from '../../3-organisms/main-attributes';
import MainStatistics from '../../3-organisms/main-statistics';
import MainViz from '../../3-organisms/main-viz';

const makeStatistics = ({
  cs,
  draw,
  ga,
  gf,
  loss,
  points,
  rc,
  region,
  team,
  win,
  yc,
}) => [
  { label: 'Team Name', value: team },
  { label: 'Region', value: region },
  { label: 'Wins', value: win },
  { label: 'Losses', value: loss },
  { label: 'Draws', value: draw },
  { label: 'Points', value: points },
  { label: 'Goals For', value: gf },
  { label: 'Goals Against', value: ga },
  { label: 'Clean Sheets', value: cs },
  { label: 'Yellow Card', value: yc },
  { label: 'Red Cards', value: rc },
];

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csv: [],
      selectedButton: '',
      selectedTeam: '',
    };
    this._loadCSV = this._loadCSV.bind(this);
    this._handleClickAttrButton = this._handleClickAttrButton.bind(this);
    this._handleClickTeam = this._handleClickTeam.bind(this);
  }

  render() {
    const { _handleClickAttrButton, _handleClickTeam } = this;
    const { csv, selectedTeam, selectedButton } = this.state;
    const buttons =
      csv.length === 0
        ? []
        : Object.keys(csv[0]).filter(key => key !== 'region' && key !== 'team');
    const statistics = !selectedTeam
      ? makeStatistics({})
      : makeStatistics(csv.find(obj => obj.team === selectedTeam));
    return (
      <MainTemplate
        top={() => <MainHeader />}
        left={() => (
          <MainAttributes
            selected={selectedButton}
            buttons={buttons}
            onClick={_handleClickAttrButton}
          />
        )}
        center={() => (
          <MainViz
            datas={csv}
            selectedTeam={selectedTeam}
            selectedButton={selectedButton}
            onClick={_handleClickTeam}
          />
        )}
        right={() => <MainStatistics datas={statistics} />}
      />
    );
  }

  componentDidMount() {
    this._loadCSV();
  }

  _loadCSV() {
    d3.csv('/worldcup.csv').then(csv => this.setState({ csv }));
  }

  _handleClickAttrButton({ __buttonName: selectedButton }) {
    this.setState(prevState => ({
      ...prevState,
      selectedButton:
        prevState.selectedButton === selectedButton ? '' : selectedButton,
    }));
  }

  _handleClickTeam({ __teamName: selectedTeam }) {
    this.setState(prevState => ({
      ...prevState,
      selectedTeam: prevState.selectedTeam === selectedTeam ? '' : selectedTeam,
    }));
  }
}

export default MainPage;
