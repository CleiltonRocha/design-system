import {StoryObj, Meta} from '@storybook/react'
import {Text, TextProps} from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, magnam placeat deleniti quam rem nobis culpa dolorum deserunt ullam odio reiciendis eius quod hic labore quibusdam possimus quisquam fugiat ipsa?'
  },

  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl',],
      control: {
        type: 'inline-radio'
      }
    },
  }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  
}