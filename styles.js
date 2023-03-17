import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D7D9D8',
      alignItems: 'center',
    },
    mainTitle: {
      fontSize: 20,
      marginTop: 40,     
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      height: 40,
      width: 250,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginRight: 10,
    },
    item: {
      backgroundColor: '#D9B341',
      width: 350,
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 14,
    },
    deleteButton: {
      color: 'red',
      fontSize: 14,
    },
  });