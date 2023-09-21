import React, { useState } from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { buttonPrimaryStyles as styles } from './buttonPrimary.styles';

export interface ButtonPrimaryProps {
  id: string;
  label: string;
  major?: 'neutral' | 'disabled'; // Major variant
  size?: 'small' | 'medium' | 'large'; // Button size
  fullwidth?: boolean; // Sets button to full width
  onPress?: () => void; // Press handler
}

export const ButtonPrimary = ({
  label,
  major = 'neutral',
  size = 'medium',
  fullwidth,
  onPress,
}: ButtonPrimaryProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  // Map ReactJS props to React Native style properties
  const buttonStyle: ViewStyle = {
    ...styles.container,
    ...(isPressed && styles.pressed),
    ...(major === 'disabled' && styles.small),
    ...(size === 'medium' && styles.medium),
    ...(size === 'large' && styles.large),
    ...(size === 'small' && styles.small),
    ...(fullwidth && styles.fullwidth),
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={buttonStyle}
      disabled={major === 'disabled'}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
