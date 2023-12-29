import {StoryObj, Meta} from '@storybook/react'
import { Box, MultiStep, MultiStepProps} from '@fusion-design-system/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,

  args: {
    size: 4,
    currentStep: 1
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', gap: '$2', alignItems: 'center' }}>
          {Story()}
        </Box>
      )
    }
  ]

} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4
  }
}

