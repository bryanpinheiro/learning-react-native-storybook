import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { ButtonSecondary, ButtonSecondaryProps } from './ButtonSecondary';

const meta: Meta<ButtonSecondaryProps> = {
  title: 'Atoms/Buttons/ButtonSecondary',
  component: ButtonSecondary,
  decorators: [
    (Story) => (
      <View style={{ padding: 42, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    onPress: { action: 'onPress' },
  },
};

export default meta;
type StoryArgs = Partial<ButtonSecondaryProps>;
type Story = StoryObj<typeof meta> & {
  args: StoryArgs;
};

const commonArgs = {
  id: 'default',
  label: 'Log in',
};

export const Medium: Story = {
  args: {
    ...commonArgs,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...commonArgs,
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    ...commonArgs,
    size: 'small',
  },
};
