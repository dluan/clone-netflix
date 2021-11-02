import { Story, Meta } from '@storybook/react'
import Header from '.'

export default {
  title: 'Main',
  component: Header
} as Meta

export const Basic: Story = () => <Header />
