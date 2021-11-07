import { Story, Meta } from '@storybook/react'
import CarouselItem from '.'

export default {
  title: 'Main',
  component: CarouselItem
} as Meta

export const Basic: Story = () => <CarouselItem />
