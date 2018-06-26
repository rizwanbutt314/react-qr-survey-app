import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Segment, Grid, Header } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import './QRScanner.css';

class QR extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this)
  }

  next = () => {
   this.props.history.push('/q1');
  }
  handleScan(data){
    if(data){
      this.setState({
        result: data,   
      });
      this.next();
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    return(
    <div className="question c qr">
    <Segment>  
        <Grid textAlign='center' style={{ height: '100%' }} container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
              <Header as='h2' color='teal' textAlign='center'>
                    Welcome <br />
                    <br />
                    QR Survey App
              </Header>
             <div>
                <QrReader
                delay={this.state.delay}
                onError={this.handleError}
                onScan={this.handleScan}
                // style={{ width: '100%' }}
                />
                <p>{this.state.result}</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </div>
    )
  }
}

export default QR;