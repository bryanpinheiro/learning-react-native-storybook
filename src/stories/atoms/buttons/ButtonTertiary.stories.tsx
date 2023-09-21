import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { ButtonTertiary, ButtonTertiaryProps } from './ButtonTertiary';

const meta: Meta<ButtonTertiaryProps> = {
  title: 'Atoms/Buttons/ButtonTertiary',
  component: ButtonTertiary,
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
type StoryArgs = Partial<ButtonTertiaryProps>;
type Story = StoryObj<typeof meta> & {
  args: StoryArgs;
};

const commonArgs = {
  id: 'default',
  label: 'Continue with Google',
};

export const Default: Story = {
  args: {
    ...commonArgs,
  },
};

export const Loading: Story = {
  args: {
    ...commonArgs,
    loading: true,
    label: 'Logging you in...',
  },
};
