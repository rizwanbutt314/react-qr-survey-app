import React, { Component } from 'react';
import { Segment, Grid, Header, Form, Radio, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import './Questions.css';

class Question1 extends Component {
    state = {next : false}
    handleChange = (e, { value }) => this.setState({ value })
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.value) {
            this.setState({next : true});
        } else {
            alert("Please select a value to continue");
        }
    }
  render(){
      
    return(
    <div className="question c centerContent">
    <Segment>  
        <Grid textAlign='center' style={{ height: '100%' }} container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={16}>
              <Header as='h1' color='teal' textAlign='center' style={{fontSize: '60px'}}>
                    Question 1 / 5
              </Header>
              <Header as='h2' color='teal' textAlign='center' style={{fontSize: '45px'}}>
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
                                style={{fontSize: '40px'}}
                                label='1846'
                                name='radioGroup'
                                value='1846'
                                checked={this.state.value === '1846'}
                                onChange={this.handleChange}
                            />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                            <Radio
                                style={{fontSize: '40px'}}
                                label='1893'
                                name='radioGroup'
                                value='1893'
                                checked={this.state.value === '1893'}
                                onChange={this.handleChange}
                            />
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor: 'gainsboro'}}>
                        <Grid.Column width={8}>
                            <Form.Field>
                                <Radio
                                    style={{fontSize: '40px'}}
                                    label='1901'
                                    name='radioGroup'
                                    value='1901'
                                    checked={this.state.value === '1901'}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Form.Field>
                            <Radio
                                style={{fontSize: '40px'}}
                                label='1854'
                                name='radioGroup'
                                value='1854'
                                checked={this.state.value === '1854'}
                                onChange={this.handleChange}
                            />
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column width={16} />
                    <Grid.Column width={16} />
                    <Grid.Row>
                        <Grid.Column>
                        <Button size='massive' primary onClick={this.handleSubmit}>Next</Button>
                        </Grid.Column>
                    </Grid.Row>                    
                </Grid>
                {this.state.next ? <Redirect to="/q2" /> : null}
            </Form>
            
    </Segment>
    </div>
    )
  }
}

export default Question1;