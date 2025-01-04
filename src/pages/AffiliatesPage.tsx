import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const AffiliatesPage: React.FC = () => {
    const menu = (
        <Menu>
            <Menu.Item key="1">
                <a href="#medical-fund">Medical Fund</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a href="#education-fund">Education Fund</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Dropdown overlay={menu}>
                <Button>
                    Affiliates <DownOutlined />
                </Button>
            </Dropdown>
            <div id="medical-fund" style={{ marginTop: '20px' }}>
                <h2>Medical Fund</h2>
                <p>This fund provides very low-cost medical assistance to those in need within the community.</p>
            </div>
            <div id="education-fund" style={{ marginTop: '20px' }}>
                <h2>Education Fund</h2>
                <p>Students within the community can apply for bursaries if they are unable to pay for their education.</p>
            </div>
        </div>
    );
};

export default AffiliatesPage;