import React, { Component } from 'react';
import { Image, Grid, Header } from 'semantic-ui-react';

import Aux from '../_Aux/_Aux';
import './Layout.css';
import logo from '../../assets/images/Louis_Vuittonlogo.png';

class Layout extends Component {
    state = {}
    render() { 
        return ( 
            <Aux>
                    <Grid textAlign='center' style={{ height: '100%' }} container stackable verticalAlign='middle'>
                        <Grid.Row className="logoContent">
                        <Grid.Column width={10}>
                            <Header as='h1' color='teal' textAlign='center'>
                               <Image src={logo} />
                            </Header>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
             
                <main>
                    {this.props.children}
                </main>
            </Aux>
         );
    }
}
 
export default Layout;