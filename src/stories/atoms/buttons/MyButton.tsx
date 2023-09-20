import {
  TouchableOpacity,
  TouchableOpacityProps, 
  Text
} from 'react-native';
import { styles } from './MyButton.styles';

export interface MyButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({
  onPress,
  text,
  ...props
}: MyButtonProps) => {
  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={ onPress }
      activeOpacity={ 0.8 }>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};