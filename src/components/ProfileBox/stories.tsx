import { Story, Meta } from '@storybook/react'
import ProfileBox from '.'

export default {
  title: 'Main',
  component: ProfileBox
} as Meta

export const Basic: Story = () => <ProfileBox />
