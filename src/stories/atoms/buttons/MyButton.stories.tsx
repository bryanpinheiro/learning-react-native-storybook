import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { MyButton, MyButtonProps } from './MyButton';

const meta = {
  title: 'Atoms/Buttons/MyButton',
  component: MyButton,
  decorators: [
    (Story) => (
      <View style={{ padding: 42, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    onPress: { action: "onPress" }
  }
} satisfies Meta<typeof MyButton>;

export default meta;
type StoryArgs = Partial<MyButtonProps>;
type Story = StoryObj<typeof meta> & {
  args: StoryArgs;
};

export const Basic: Story = {
  args: {
    text: 'Hello!!!'
  }
};

export const AnotherExample: Story = {
  args: {
    text: 'Another example',
  },
};
