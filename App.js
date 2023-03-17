import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { DATA } from './mockData';
import { v4 as uuidv4 } from 'uuid';
import { styles } from './styles';


const Item = ({title, onDelete}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={onDelete}>
      <Text style={styles.deleteButton}>Delete</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  const [text, onChangeText] = React.useState('');
  const [items, setItems] = React.useState('');

  const handleDelete = (id) => {
    const newData = items.filter(item => item.id !== id);
    setItems(newData);
  };

  const addItem = () => {
    if (text.length > 0){
      setItems(prevData => [...prevData, { id: uuidv4(), title: text }]);
      onChangeText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.mainTitle}>TO-DO</Text>
      <Text>Add a Todo to your List</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Todo"
        selectionColor={'red'}/>
        <Button
          color='#D9A13B'
          title='Add'
          onPress={addItem}/>
        </View>
        <FlatList
          data={items}
          renderItem={({item}) => <Item title={item.title} onDelete={() => handleDelete(item.id)}/>}
            keyExtractor={item => item.id}
          />
      <StatusBar style="auto" />
    </View>
  );
}


