import { Story, Meta } from '@storybook/react'
import SuperBanner from '.'

export default {
  title: 'Main',
  component: SuperBanner
} as Meta

export const Basic: Story = () => <SuperBanner />
