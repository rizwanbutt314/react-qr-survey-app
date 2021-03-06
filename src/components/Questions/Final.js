import React, { Component } from 'react';
import { Segment, Grid, Header, Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Questions.css';

class Final extends Component {
 
  render(){
      
    return(
    <div className="question c centerContent">
    <Segment>  
        <Grid textAlign='center' style={{ height: '100%' }} container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={10}>
              <Header as='h1' color='teal' textAlign='center' style={{fontSize: '60px'}}>
                Thank you
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
                        <Link to="/"><Button size='massive' primary>Finish Survey</Button></Link>
                        </Grid.Column>
                    
                    </Grid.Row>
                    <Grid.Column width={16} />
                    <Grid.Column width={16} />
                    <Grid.Row>
                        <Grid.Column>
                       
                        </Grid.Column>
                    </Grid.Row>                    
                </Grid>
            </Form>
            
    </Segment>
    </div>
    )
  }
}

export default Final;