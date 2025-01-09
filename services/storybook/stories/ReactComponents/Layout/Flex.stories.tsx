import { Flex as _Flex } from '@fastcampus/react-components-layout';
import "@fastcampus/react-components-layout/style.css";
import React from 'react';

export default {
  title: "React Componenets/Layout/Flex",
  component: _Flex,
  parameters: {
  layout: "centered"
  },
  tags: ["autodocs"]
}

export const FlexStory = {
  args: {
    as: 'div',
    padding: '5',
    background: 'pink',
    boxShadow: 'xl',
    borderRadius: 'md',
    justify: 'space-between',
    style: {
      width: '300px',
    }
  },
  render: (args) => (
    <_Flex {... args}>
      <div>test</div>
      <div>입니다</div>
    </_Flex>
  )
}