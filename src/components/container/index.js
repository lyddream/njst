import React, {Component}  from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
export default class Container extends React.Component {

    render(){
        return(
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Content>Content</Content>
                        <Sider>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

