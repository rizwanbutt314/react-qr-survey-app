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
                        <Grid.Column width={16}>
                            <Grid.Row style={{display: 'inline-flex'}}>
                               <Image src={logo} />
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Grid.Row>
                                <main style={{marginTop: '150px'}}>
                                    {this.props.children}
                                </main>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                        
                    </Grid>

                {/* <main style={{marginTop: '50px'}}>
                    {this.props.children}
                </main> */}
            </Aux>
         );
    }
}
 
export default Layout;