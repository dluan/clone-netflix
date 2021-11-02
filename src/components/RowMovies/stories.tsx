import { Story, Meta } from '@storybook/react'
import RowMovies from '.'

export default {
  title: 'Main',
  component: RowMovies
} as Meta

export const Basic: Story = () => <RowMovies />
