import {StoryObj, Meta} from '@storybook/react'
import {Avatar, AvatarProps} from '@fusion-design-system/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/CleiltonRocha.png',
    alt: 'Cleilton Rocha'
  },

  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }

} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}