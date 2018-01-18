import React from 'react';
import { Tabs, Button } from 'antd';


const TabPane = Tabs.TabPane;
const operations = <Button>Extra Action</Button>;

export class Home extends React.Component {
    render() {
        return (
            <div><Tabs tabBarExtraContent={operations}>
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
            </Tabs></div>
        )
    }
}