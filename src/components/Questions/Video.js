import React, { Component } from 'react';
import { Segment, Grid, Header, Form, Button, Embed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Questions.css';

class Video extends Component { 
 
  render(){
      
    return(
    <div className="question c">
    <Segment>  
        <Grid textAlign='center' style={{ height: '100%' }} container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={16}>
              <Header as='h1' color='teal' textAlign='center' style={{fontSize: '60px'}}>
                Product Listing
              </Header>
          </Grid.Column>
          </Grid.Row>
          </Grid>
            <Form>
                <Grid container textAlign='center' stackable>
                <Grid.Column width={16}/>
                <Grid.Column width={16} />
                    <Grid.Row>
                    <Grid.Column width={14}>
                        <Embed 
                            id='jaOqOPo_aJc' 
                            autoplay={true}
                            active={true}
                            brandedUI
                            color='white' 
                            source='youtube' />
                        </Grid.Column>
                        </Grid.Row>
                    <Grid.Row style={{backgroundColor: 'gainsboro'}}>
                        <Grid.Column width={8}>
                        <Link to="/final"><Button size='massive' primary>Continue</Button></Link>
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

export default Video;