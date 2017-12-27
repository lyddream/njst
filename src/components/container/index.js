import React, {Component}  from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;
export default class Container extends React.Component {

    render(){
        return(
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

