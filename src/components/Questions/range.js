import React from 'react';
import InputRange from 'react-input-range';

// import './slider.css';
import 'react-input-range/lib/css/index.css';

class Range extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { value: 25 };
    }
  
    render() {
      return (
        <div>
          <span style={{fontSize:'18px',color:'grey'}}>
            {this.state.value}
          </span><br/>
          <br/>
          <InputRange
            maxValue={50}
            minValue={0}
            value={this.state.value}
            onChange={value => this.setState({ value })} />
        </div>
      );
 
      
         }
}

  export default Range;