import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../constants';
import font from '../../../assets/fonts/font';
import {colors} from 'react-native-swiper-flatlist/src/themes';
const styles = StyleSheet.create({
  imageBackground: {
    position: 'absolute',
    width: SIZES.width,
    height: SIZES.height,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorzontal: 20,
  },
  headingContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  slogan: {
    fontFamily: font.semiBold,
    fontSize: SIZES.medium - 4,
    padding: 0,
    lineHeight: SIZES.medium - 2,
    color: '#000',
  },
  title: {
    fontFamily: font.semiBold,
    fontSize: SIZES.xLarge,
    marginTop: 30,
    color: '#000',
  },
  inputContainer: {
    marginTop: 10,
    width: SIZES.width - 50,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputField: color => ({
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    borderWidth: color != '#cecece' ? 2 : 1,
    borderColor: color,
    width: 50,
    height: 56,
  }),
  input: color => ({
    color: color != '#cecece' ? color : '#000',
    textAlign: 'center',
    flex: 1,
    fontFamily: font.semiBold,
  }),
  iconContainer: {
    alignItems: 'center',
    width: 36,
  },
  icon: {
    color: COLORS.primary,
    marginLeft: 8,
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  linkText: {
    color: '#000',
    fontFamily: font.regular,
  },
  link: {
    color: '#007FFF',
    fontFamily: font.semiBold,
  },
  text: {
    color: '#000',
  },
  againText: {
    color: '#007FFF',
    fontFamily: font.semiBold,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
});
export default styles;
