import React, { Component } from 'react';
import { Container, Segment, Grid, Header, Form, Radio, GridColumn, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Questions.css';

class Q2 extends Component {
 
  render(){
      
    return(
    <div className="question c centerContent">
    <Segment>  
        <Grid textAlign='center' style={{ height: '100%' }} container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={16}>
              <Header as='h1' color='teal' textAlign='center' style={{fontSize: '60px'}}>
                    Question 2 / 5
              </Header>
              <Header as='h2' color='teal' textAlign='center' style={{fontSize: '45px'}}>
                    Select your favorite hero
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
                            <Radio
                                style={{fontSize: '40px', float: 'left'}}
                                label='Monaco'
                                name='radioGroup'
                                value='this'
                                // checked={this.state.value === 'this'}
                                // onChange={this.handleChange}
                            />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                            <Radio
                                style={{fontSize: '40px'}}
                                label='Milan'
                                name='radioGroup'
                                value='this'
                                // checked={this.state.value === 'this'}
                                // onChange={this.handleChange}
                            />
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor: 'gainsboro'}}>
                        <Grid.Column width={8}>
                        <Form.Field>
                            <Radio
                                style={{fontSize: '40px', float: 'left'}}
                                label='Paris'
                                name='radioGroup'
                                value='this'
                                // checked={this.state.value === 'this'}
                                // onChange={this.handleChange}
                            />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                            <Radio
                                style={{fontSize: '40px'}}
                                label='Torino'
                                name='radioGroup'
                                value='this'
                                // checked={this.state.value === 'this'}
                                // onChange={this.handleChange}
                            />
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column width={16} />
                    <Grid.Column width={16} />
                    <Grid.Row>
                        <Grid.Column>
                        <Link to="/q1"><Button size='massive' primary>Prev</Button></Link>
                        <Link to="/q3"><Button size='massive' primary>Next</Button></Link>
                        </Grid.Column>
                    </Grid.Row>                    
                </Grid>
            </Form>
            
    </Segment>
    </div>
    )
  }
}

export default Q2;