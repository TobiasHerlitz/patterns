import React from 'react';
import styled from 'styled-components';

// Components
import BaseSVG from './BaseSVG';
import Showcase from './Showcase';
import Dashboard from './Dashboard';

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usedShape: 8,
      showCircle: true,
      shapeData: {
        outline: [],
        dots: []
      }
    }
    this.handleShapeChange = this.handleShapeChange.bind(this);
    this.handleSupportCircle = this.handleSupportCircle.bind(this);
  }

  componentDidMount() {
    this.pointMaker(this.state.usedShape)
  }

  pointMaker(n) {
    const outerShape = [];
    const dots = [];
    for (let i = 0; i < n; i++) {
      let x = Math.cos((2 * i * Math.PI) / n) * 150;
      let y = Math.sin((2 * i * Math.PI) / n) * 150;
      outerShape.push([x, y]);
      
      if (i == n-1) {
        dots.push([(x + outerShape[0][0]) / 2, (y + outerShape[0][1]) / 2])
      }
      if (i > 0) {
        dots.push([(x + outerShape[i-1][0]) / 2, (y + outerShape[i-1][1]) / 2])
      }
    }
    this.setState({shapeData: {outline: outerShape, dots: dots}})
  }

  handleShapeChange(e) {
    this.setState({usedShape: e.target.value});
    this.pointMaker(e.target.value)
  }

  handleSupportCircle(e) {
    this.setState({showCircle: e.target.checked})
  }

  render() {
    const { handleShapeChange, handleSupportCircle } = this;
    const { usedShape, showCircle, shapeData } = this.state;
    return (
      <StyledEditor>
        <UpperEditor>
          <Dashboard {...{ handleShapeChange, usedShape, handleSupportCircle, showCircle }} />
          <div>
            <BaseSVG {...{showCircle, shapeData}}/>
          </div>
        </UpperEditor>
        <Showcase outline={shapeData.outline}/>
      </StyledEditor>
    );
  }
}

const StyledEditor = styled.div`
  display: flex;
  flex-direction: column;
  /*border: 1px solid black;*/
  width: 80%;
`

const UpperEditor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 0;
  justify-content: space-around;
  gap: 30px;
`

export default Editor;
