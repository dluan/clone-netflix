import { Story, Meta } from '@storybook/react'
import Carousel from '.'

export default {
  title: 'Main',
  component: Carousel
} as Meta

export const Basic: Story = () => <Carousel />
