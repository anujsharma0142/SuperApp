import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageStyle: {
    width: 50, // Set the width you want here
    height: 50, // Set the height you want here
    resizeMode: 'contain',
    marginLeft: 17,
  },
  textUnderline: {
    marginTop: 6,
    height: 1,
    borderColor: '#d3d3d3',
    borderWidth: 0.4,
  },
  underlineContainer: {
    position: 'relative',
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black', // Customize the underline color
  },
  underlinedText: {
    fontSize: 15,
    color: '#111',
    fontWeight: '700',
    textDecorationLine: 'none', // Remove default underline style
  },
  verticalLine: {
    borderColor: '#d3d3d3',
    borderWidth: 0.8,
    width: 1,
    height: 100,
  },
  tableContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 0.2,
    borderColor: '#808080',
    padding: 5,
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
  policyText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#111',
  },
  detailPolicy: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },
  planName: {
    color: '#808080',
    fontSize: 14,
  },
  planText: {
    marginVertical: 5,
    fontSize: 16,
    color: '#111',
    fontWeight: '400',
  },
  outerloanContainer: {
    marginTop: 5,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outerLoan: {
    fontSize: 14,
    color: '#808080',
  },
  outerLoanText: {
    fontSize: 16,
    color: '#111',
    marginVertical: 8,
  },
});

export default styles;
