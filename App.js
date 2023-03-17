import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>TO-DO</Text>
      <Text>Add a Todo to your List</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Todo"/>
        <Button
        title='Add'/>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title}/>}
            keyExtractor={item => item.id}
          />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7D9D8',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#D9B341',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
