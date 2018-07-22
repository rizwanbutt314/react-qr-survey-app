import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Segment, Grid, Header } from 'semantic-ui-react';

import './QRScanner.css';

class QR extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage = () => {
    this.props.history.push('/q1');
   }

   getUsernamePassword = (result) => {
     let userData = result;
     if(userData.includes("username")){
      let userArray = userData.split('&');
      let initialUsername = userArray[0].split('=');
      let initialPassword = userArray[1].split('=');
      let user = [];
      user[0] = initialUsername[1];
      user[1] = initialPassword[1];
      return user;
     }
   }
   validateUser = () => {
      let self = this;
      let result = this.state.result;
      
      //let result = 'username=Muhammadhashir23@gmail.com&password=1234567';
      let res = this.getUsernamePassword(result);
      if (res) {
        var formData = new FormData();
        formData.append('action', 'login');
        formData.append('username', res[0]);
        formData.append('password', res[1]);
  
        fetch('http://localhost:8080/server/main.php', {
        method: 'POST',
        body: formData 
        }).then(function(response) {
          return response;
        }).then(function(data) {
          if(data.status === 200) {
            self.nextPage();
          }
        });
      }
    }
  handleScan(data){
    if(data){
      this.setState({
        result: data,   
      });
      this.validateUser();
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    return(
    <div className="question c qr centerContent">
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
                {/* <p>{this.state.result}</p> */}
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