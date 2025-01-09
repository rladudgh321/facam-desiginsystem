import { classes } from '@fastcampus/themes';
import { recipe } from '@vanilla-extract/recipes';

export const textStyle = recipe({
  variants: {
    fontSize: {
      ...classes.typography.text
    },
    defaultVariants: {
      fontSize: 'xl'
    }
  }
})

export const headingStyle = recipe({
  variants: {
    fontSize: {
      ...classes.typography.heading
    },
    defaultVariants: {
      fontSize: 'xl'
    }
  }
})