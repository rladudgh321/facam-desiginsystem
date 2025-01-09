import { Grid as _Grid, GridItem } from '@fastcampus/react-components-layout';
import "@fastcampus/react-components-layout/style.css";
import { vars } from '@fastcampus/themes';
import React from 'react';

export default {
  title: "React Componenets/Layout/Grid",
  component: _Grid,
  parameters: {
    layout: "centered"
  },
  style: {
    color: 'red',
    backgroundColor: 'yellow'
  },
  tags: ["autodocs"]
}

export const GridStory = {
  args: {
    as: 'div',
    
  },
  render: (args) => (
    <_Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      templateRows={'50px 1fr 30px'}
      templateColumns={'150px 1fr'}
      gap='1'
      color={args.color && vars.colors.$scale?.[args.color][700]}
    >
      <GridItem style={{ backgroundColor: vars.colors.$scale.orange[300] }} area={'header'}>
        Header
      </GridItem>
      <GridItem style={{ backgroundColor: vars.colors.$scale.pink[300] }} area={'nav'}>
        Nav
      </GridItem>
      <GridItem style={{ backgroundColor: vars.colors.$scale.green[300] }} area={'main'}>
        Main
      </GridItem>
      <GridItem style={{ backgroundColor: vars.colors.$scale.blue[300] }} area={'footer'}>
        Footer
      </GridItem>
    </_Grid>
  )
}
