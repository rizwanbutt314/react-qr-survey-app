import React, { Component } from 'react';
import { Container, Segment, Grid, Header, Form, Radio, GridColumn, Button, Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Questions.css';

class Q3 extends Component {
 
  render(){
      
    return(
    <div className="question c">
    <Segment>  
        <Grid textAlign='center' style={{ height: '100%' }} container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={10}>
              <Header as='h2' color='teal' textAlign='center'>
                    Question 3 / 5
              </Header>
              <Header as='h3' color='teal' textAlign='center'>
                    I consider Louis Vuitton a Prestegius Brand? 
              </Header>
          </Grid.Column>
          </Grid.Row>
          </Grid>
            <Form>
                <Grid container textAlign='center' stackable>
                <Grid.Column width={16}/>
                <Grid.Column width={16} />
                    <Grid.Row style={{backgroundColor: 'gainsboro'}}>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Rating maxRating={5} defaultRating={3} icon='star' size='massive'/>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column width={16} />
                    <Grid.Column width={16} />
                    <Grid.Row>
                        <Grid.Column>
                        <Link to="/q2"><Button size='large' primary>Prev</Button></Link>
                        <Link to="/q4"><Button size='large' primary>Next</Button></Link>
                        </Grid.Column>
                    </Grid.Row>                    
                </Grid>
            </Form>
            
    </Segment>
    </div>
    )
  }
}

export default Q3;