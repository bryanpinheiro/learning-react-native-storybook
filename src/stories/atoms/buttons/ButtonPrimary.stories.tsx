import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { ButtonPrimary, ButtonPrimaryProps } from './ButtonPrimary';

const meta: Meta<ButtonPrimaryProps> = {
  title: 'Atoms/Buttons/ButtonPrimary',
  component: ButtonPrimary,
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
type StoryArgs = Partial<ButtonPrimaryProps>;
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

export const Disabled: Story = {
  args: {
    ...commonArgs,
    size: 'large',
    major: 'disabled',
  },
};

export const Loading: Story = {
  args: {
    ...commonArgs,
    label: 'Logging you in...',
    size: 'large',
  },
};
