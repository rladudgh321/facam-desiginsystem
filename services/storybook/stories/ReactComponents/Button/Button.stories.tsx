import { Button as _Button } from '@fastcampus/react-components-button';
import "@fastcampus/react-components-layout/style.css";
import "@fastcampus/react-components-button/style.css";
import { useButton, useToggleButton } from '@fastcampus/react-hooks-button';
import { vars } from '@fastcampus/themes';
import { Text as _Text } from '@fastcampus/react-components-layout';

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

export const TextStory = {
  render: () => {
    const { buttonProps } = useButton({
      elementType: "div",
      onClick() {
        console.log('ttt');
      },
    });

    return (
      <_Text {...buttonProps}
        as='div'
        fontSize="md"
        color="green"
        style={{
          userSelect:"none",
          cursor:"pointer"
        }}
      >
        텍스트 버튼입니다
      </_Text>
    )
  }
}

export const ToggleStory = {
  render: () => {
    const { buttonProps, isSelected } = useToggleButton({
      elementType: "button",
    }, false);

    return (
      <_Button {...buttonProps}
        variant={isSelected ? "solid" : "outline"}
        color="green"
      >
        {isSelected ? "haha" : "hoho"}
      </_Button>
    )
  }
}