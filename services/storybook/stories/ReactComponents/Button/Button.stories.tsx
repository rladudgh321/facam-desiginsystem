import { Button as _Button } from '@fastcampus/react-components-button';
import "@fastcampus/react-components-layout/style.css";
import "@fastcampus/react-components-button/style.css";
import { vars } from '@fastcampus/themes';
export default {
  title: "React Componenets/Button",
  component: _Button,
  parameters: {
  layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "inline-radio"
    },
    variant: {
      options: ["ghost", "outline", "solid"],
      control: "inline-radio"
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select"
    }
  }
}

export const ButtonStory = {
  args: {
    size: 'md',
    variant: 'solid',
    children: '버튼',
    isDisabled: false,
    isLoading: false,
  },
  render: (args) => <_Button {...args} leftIcon={'🍕'} rightIcon={'🍔'} />
};