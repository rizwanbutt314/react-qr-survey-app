import React, { Component } from 'react';
import { Container, Segment, Grid, Header, Form, Radio, GridColumn, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Questions.css';
import RangePicker from './range';

class Q5 extends Component {
    state = { rating: 0 }

    handleChange = e => this.setState({ rating: e.target.value })
  render(){
    const { rating } = this.state;
    
    return(
    <div className="question c centerContent">
    <Segment>  
        <Grid textAlign='center' style={{ height: '100%' }} container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={16}>
              <Header as='h1' color='teal' textAlign='center' style={{fontSize: '60px'}}>
                    Question 5 / 5
              </Header>
              <Header as='h2' color='teal' textAlign='center' style={{fontSize: '45px'}}>
                    How many different product did you see?
              </Header>
          </Grid.Column>
          </Grid.Row>
          </Grid>
            <Form>
                <Grid container textAlign='center' stackable verticalAlign='middle'>
                <Grid.Column width={16}/>
                <Grid.Column width={16} verticalAlign='middle'/>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column width={4}>
                        
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <RangePicker />
                        </Grid.Column>
                        <Grid.Column width={4}>
                        
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column width={16} />
                    <Grid.Column width={16} />
                    <Grid.Row>
                        <Grid.Column>
                        <Link to="/q4"><Button size='massive' primary>Prev</Button></Link>
                        <Link to="/video"><Button size='massive' primary>Next</Button></Link>
                        </Grid.Column>
                    </Grid.Row>                    
                </Grid>
            </Form>
            
    </Segment>
    </div>
    )
  }
}

export default Q5;