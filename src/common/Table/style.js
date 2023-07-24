import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 0.2,
    borderColor: '#808080',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    padding: 10,
  },
  cellHeader: {
    color: '#808080',
    fontSize: 14,
  },
  cellContent: {
    fontSize: 17,
    color: '#111',
    fontWeight: '400',
    marginVertical: 7,
  },
  verticalLine: {
    height: '123%',
    width: 0.5,
    backgroundColor: '#808080',
  },
  horizontalLine: {
    height: 0.5,
    width: '123%',
    backgroundColor: '#808080',
    marginVertical: 5,
  },
});

export default styles;
