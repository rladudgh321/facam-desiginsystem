import { Divider as _Divider, Box } from '@fastcampus/react-components-layout';
import "@fastcampus/react-components-layout/style.css";
import { vars } from '@fastcampus/themes';

export default {
  title: "React Componenets/Layout/Divider",
  component: _Divider,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => <Box padding={3} style={{width:'300px', height:'300px'}} ><Story /></Box>],
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: 'select'
    },
    variant: {
      options: ["solid", "dashed"],
      control: "radio"
    },
    color: {
      options: vars.colors.$scale,
      control: "color"
    },
  }
}

export const DividerStory = {
  args: {
    color: 'red',
    size: 1,
    variant: 'solid',
    orientation: 'horizontal'
  }
};