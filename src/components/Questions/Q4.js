import React, { Component } from 'react';
import { Segment, Grid, Header, Form, Button, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Questions.css';

class Q4 extends Component {
 
  render(){
      
    return(
    <div className="question c centerContent">
    <Segment>  
        <Grid textAlign='center' style={{ height: '100%' }} container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={16}>
              <Header as='h1' color='teal' textAlign='center' style={{fontSize: '60px'}}>
                    Question 4 / 5
              </Header>
              <Header as='h2' color='teal' textAlign='center' style={{fontSize: '45px'}}>
                    With which of the following do you assosiate Louis Vuitton?
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
                        <Segment compact>
                            <Checkbox toggle label="Luxury" style={{fontSize: '40px'}}/>
                        </Segment>
                        </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Bags" style={{fontSize: '40px'}}/>
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor: 'gainsboro'}}>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Home" style={{fontSize: '40px'}}/>
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Car" style={{fontSize: '40px'}}/>
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor: 'gainsboro'}}>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Travel" style={{fontSize: '40px'}}/>
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Status" style={{fontSize: '40px'}}/>
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor: 'gainsboro'}}>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Make Up" style={{fontSize: '40px'}}/>
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Life Style" style={{fontSize: '40px'}}/>
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column width={16} />
                    <Grid.Column width={16} />
                    <Grid.Row>
                        <Grid.Column>
                        <Link to="/q3"><Button size='massive' primary>Prev</Button></Link>
                        <Link to="/q5"><Button size='massive' primary>Next</Button></Link>
                        </Grid.Column>
                    </Grid.Row>                    
                </Grid>
            </Form>
            
    </Segment>
    </div>
    )
  }
}

export default Q4;