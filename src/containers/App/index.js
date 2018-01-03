import React from 'react';
import {Header,Footer} from '../../components';

import { connect } from 'react-redux';

 class App extends React.Component {

   props:{
       children: any
   };

    render() {
        let { children }  = this.props;
        return (
            <div>
                <Header/>
                <div>
                    {children}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default connect()(App)

