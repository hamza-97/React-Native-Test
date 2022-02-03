import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: 12,
    marginVertical: 16,
    padding: 12,
    borderRadius: 16,
    shadowColor: 'gray',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 8,
    backgroundColor: 'white',
  },
  textStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 32,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
export default styles;
