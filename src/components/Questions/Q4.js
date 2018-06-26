import React, { Component } from 'react';
import { Container, Segment, Grid, Header, Form, Radio, GridColumn, Button, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Questions.css';

class Q4 extends Component {
 
  render(){
      
    return(
    <div className="question c">
    <Segment>  
        <Grid textAlign='center' style={{ height: '100%' }} container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={10}>
              <Header as='h2' color='teal' textAlign='center'>
                    Question 4 / 5
              </Header>
              <Header as='h3' color='teal' textAlign='center'>
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
                            <Checkbox toggle label="Luxury" />
                        </Segment>
                        </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Bags" />
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor: 'gainsboro'}}>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Home" />
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Car" />
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor: 'gainsboro'}}>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Travel" />
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Status" />
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor: 'gainsboro'}}>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Make Up" />
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                        <Segment compact>
                            <Checkbox toggle label="Life Style" />
                        </Segment>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column width={16} />
                    <Grid.Column width={16} />
                    <Grid.Row>
                        <Grid.Column>
                        <Link to="/q3"><Button size='large' primary>Prev</Button></Link>
                        <Link to="/q5"><Button size='large' primary>Next</Button></Link>
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