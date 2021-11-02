import { Story, Meta } from '@storybook/react'
import ProfileList from '.'

export default {
  title: 'Main',
  component: ProfileList
} as Meta

export const Basic: Story = () => <ProfileList />
