import { StyleSheet } from 'react-native';
import theme from '@/themes/theme';

export const buttonTertiaryStyles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 48, // Corresponds to 3rem in CSS
    width: 'auto',
    padding: 11, // Corresponds to 0.6875rem in CSS
    paddingHorizontal: 32, // Additional padding adjustment
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderRadius: 0.25,
    borderWidth: 1,
    borderColor: theme.borderColorDarker,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
  },
  pressed: {
    backgroundColor: '#EEEEEF',
  },
  label: {
    flex: 1,
    color: theme.textColor,
    textAlign: 'center',
    fontFamily: theme.textFontFamily,
    fontSize: 15, // Corresponds to 0.9375rem in CSS
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19, // Corresponds to 1.25rem in CSS
    letterSpacing: 0.00625 * 15, // Corresponds to 0.00625rem in CSS and 15 font size
  },
  loading: {
    opacity: 0.35,
  },
  fullwidth: {
    width: '100%',
  },
});
