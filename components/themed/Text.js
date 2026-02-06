// customized text component that uses a specfict Font family
import { Text as DefaultText, StyleSheet } from 'react-native';

// props: style, children, other Text props
const Text = ({ style, children, ...props }) => {
  return (
    <DefaultText style={[styles.text, style]} {...props}>
      {children}
    </DefaultText>
  );
};

// define another text component whose fontFamily is 'SpaceMono-Bold' if needed
const TextBold = ({ style, children, ...props }) => {
  return (
    <DefaultText style={[styles.textBold, style]} {...props}>
      {children}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SpaceMono-Regular',
    color: 'white',
    fontSize: 16,
  },
  textBold: {
    fontFamily: 'SpaceMono-Bold',
    color: 'white',
    fontSize: 16,
  },
});

export { Text, TextBold };
export default Text;
