import React, { Component } from 'react';
import { Container, Segment, Grid, Header, Form, Radio, GridColumn, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Questions.css';

class Question1 extends Component {
 
  render(){
      
    return(
    <div className="question c">
    <Segment>  
        <Grid textAlign='center' style={{ height: '100%' }} container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={10}>
              <Header as='h2' color='teal' textAlign='center'>
                    Question 1 / 5
              </Header>
              <Header as='h3' color='teal' textAlign='center'>
                    When is Louis Vuitton founded?
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
                                style={{fontSize: '20px'}}
                                label='1846'
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
                                style={{fontSize: '20px'}}
                                label='1893'
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
                                style={{fontSize: '20px'}}
                                label='1901'
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
                                style={{fontSize: '20px'}}
                                label='1854'
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
                        <Link to="/q2"><Button size='large' primary>Next</Button></Link>
                        </Grid.Column>
                    </Grid.Row>                    
                </Grid>
            </Form>
            
    </Segment>
    </div>
    )
  }
}

export default Question1;