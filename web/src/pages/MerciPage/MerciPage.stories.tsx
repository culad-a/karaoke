import type { Meta, StoryObj } from '@storybook/react'

import MerciPage from './MerciPage'

const meta: Meta<typeof MerciPage> = {
  component: MerciPage,
}

export default meta

type Story = StoryObj<typeof MerciPage>

export const Primary: Story = {}
