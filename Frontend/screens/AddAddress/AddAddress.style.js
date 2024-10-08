import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import font from '../../assets/fonts/font';
const styles = StyleSheet.create({
  heading: {
    height: 50,
    backgroundColor: COLORS.thirth,
  },
  logoContainer: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 15,
    fontFamily: font.bold,
    color: COLORS.secondary,
  },
  input: {
    padding: 10,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 5,
    color: '#000',
  },
  inputContainer: {
    marginVertical: 10,
  },
  btnContainer: {
    padding: 19,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontFamily: font.bold,
  },
});
export default styles;
