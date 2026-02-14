// customized text component that uses a specfict Font family
import { Text as DefaultText, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

// props: style, children, other Text props
const Text = ({ style, children, ...props }) => {
  const { colors } = useTheme();

  return (
    <DefaultText style={[styles.text, { color: colors.text }, style]} {...props}>
      {children}
    </DefaultText>
  );
};

// define another text component whose fontFamily is 'SpaceMono-Bold' if needed
const TextBold = ({ style, children, ...props }) => {
  const { colors } = useTheme();
  return (
    <DefaultText style={[styles.textBold, { color: colors.text }, style]} {...props}>
      {children}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SpaceMono-Regular',
    fontSize: 16,
  },
  textBold: {
    fontFamily: 'SpaceMono-Bold',
    fontSize: 16,
  },
});

export { Text, TextBold };
export default Text;
