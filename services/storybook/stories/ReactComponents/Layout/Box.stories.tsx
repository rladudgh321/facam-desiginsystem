import { Box as _Box } from '@fastcampus/react-components-layout';
import "@fastcampus/react-components-layout/style.css";

export default {
  title: "React Componenets/Layout/Box",
  component: _Box,
  parameters: {
  layout: "centered"
  },
  tags: ["autodocs"]
}

export const BoxStory = {
  args: {
    as: 'button',
    padding: '5',
    background: 'pink',
    boxShadow: 'xl',
    borderRadius: 'md'
  }
};