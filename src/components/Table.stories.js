import React from "react";
import { Table } from "./Table";

export default {
    title: 'Example/Table',
    component: Table
}

const Template = (args) => <Table {...args} />;
//const Templatee = (args) => <Table {...args} />;

export const Tabless = Template.bind({});
Tabless.args = {
    title: `It's a table`,
    //header: '',
    data: '1',
};

export const Anothertable=Template.bind({});
Anothertable.args= {
    title: `It's another table`,
    data:'2',
};