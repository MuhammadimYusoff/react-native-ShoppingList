import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import 'react-native-get-random-values'
import { uuid } from 'uuidv4';

import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

//? Main Component
const App = () => {
    //* Items
    const [items, setItems] = useState([
        {id: uuid(), text: 'Milk'},
        {id: uuid(), text: 'Eggs'},
        {id: uuid(), text: 'Bread'},
        {id: uuid(), text: 'Juice'},
    ]);

    //* Delete Item Function 
    const deleteItem = id => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id)
            //? This will return the items that is not the same as ID we removed, as we only wanted to delete the selected ID
        });
    };

    //* Add Item Function
    const addItem = text => {
        if (!text) {
            Alert.alert('Error!', 'Enter an Item', [{ text: 'OK'}]);
        } else {
            setItems(prevItems => {
                return [{id: uuid(), text} ,...prevItems];
            });
        }
    };
    
    //* Render View Function
    return (
        <View style ={styles.container}>
            <Header title='Shopping List'/>
            <FlatList 
            data = {items} 
            renderItem = {({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
            />
            <AddItem addItem={addItem}/>
        </View>
    )
}

//? Style Component
//* Output to 'style.xxxx'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
    },
    
});

export default App;