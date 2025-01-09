import { Text as _Text } from '@fastcampus/react-components-layout';
import "@fastcampus/react-components-layout/style.css";
import { classes, vars } from '@fastcampus/themes';

export default {
  title: "React Componenets/Layout/Typography/Text",
  component: _Text,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select"
    },
    color: {
      control: "color"
    },
    borderRadius: {
      options: Object.keys(vars.box.radii),
      control: "inline-radio",
      description: 'hi',
    },
    padding: {
      options: Object.keys(vars.box.spacing),
      control: 'inline-radio'
    }
  }
}

export const TextStory = {
  args: {
    as: 'button',
    padding: '5',
    background: 'pink',
    boxShadow: 'xl',
    borderRadius: 'md',
    fontSize: 'sm',
    children: 'hello world',
    color: 'red'
  }
};