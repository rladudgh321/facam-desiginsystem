import { Button as _Button } from '@fastcampus/react-components-button';
import "@fastcampus/react-components-layout/style.css";
import "@fastcampus/react-components-button/style.css";
import "@fastcampus/react-components-toast/style.css";
import React from 'react';
import { ToastProvider, useToast } from '@fastcampus/react-components-toast';

export default {
  title: "React Componenets/Toast",
  component: _Button,
  parameters: {
  layout: "centered"
  },
  tags: ["autodocs"],
}

const Example = () => {
  const { toast } = useToast();
  return <_Button onClick={() => toast({
    payload: {
      message: 'done??'
    }
  })}>버튼</_Button>
}

export const ToastStory = {
  render: () => {
    return (
      <ToastProvider>
        <Example />
      </ToastProvider>
    )
  }
}