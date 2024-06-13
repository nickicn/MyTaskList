import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { styles } from './style';
import ItemList from '../../components/ItemList';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [textInput, setTextInput] = useState('');
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItemsFromDevice();
  }, [])
  useEffect(() => {
    saveItemToDevice();
  }, [items])


  const saveItemToDevice = async () => {
    try {
      const itemJson = JSON.stringify(items);
      await AsyncStorage.setItem('myTaskList', itemJson);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  const getItemsFromDevice = async () => {
    try {
      const items = await AsyncStorage.getItem('myTaskList');
      if (items != null) {
        setItems(JSON.parse(items));
      }
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  const addItem = () => {
    //console.log(textInput);
    if (textInput == '') {
      Alert.alert(
        'Ocorreu um problema :(',
        'Por favor, informe a tarefa');
    } else {
      const newItem = {
        id: Math.random(),
        name: textInput,
        bought: false
      };
      setItems([...items, newItem]);
      setTextInput('');
    }
  }

  const markItemBought = itemId => {
    const newItems = items.map((item) => {
      if (item.id == itemId) {
        return { ...item, bought: true }
      }
      return item;
    });
    setItems(newItems);
  }

  const unmarkItemBought = itemId => {
    const newItems = items.map((item) => {
      if (item.id == itemId) {
        return { ...item, bought: false }
      }
      return item;
    });
    setItems(newItems);
  }

  const removeItem = itemId => {
    Alert.alert('Excluir Tarefa?',
      'Confirma a exclusão desta tarefa?',
      [
        {
          text: 'Sim', onPress: () => {
            const newItems = items.filter(item => item.id != itemId);
            setItems(newItems);
          }
        },
        {
          text: 'Cancelar', style: 'cancel'
        }
      ]
    )
  }

  const removeAll = () => {
    Alert.alert(
      "Limpar Lista?",
      "Confirma a exclusão de todos as tarefas de sua lista?",
      [{
        text: 'Sim',
        onPress: () => { setItems([]) }
      }, {
        text: 'Cancelar',
        style: 'cancel',
      }]
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        resizeMode='repeat'
        style={{ flex: 1, justifyContent: 'flex-start' }}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Lista de Tarefas</Text>
          <View>
            <Ionicons name="trash" size={32} color="#1f5146" onPress={removeAll} />
          </View>
        </View>

        {/* Lista de Produtos */}
        <FlatList
          contentContainerStyle={{ padding: 20, paddingBottom: 100, color: '#fff' }}
          data={items}
          renderItem={({ item }) =>
            <ItemList
              item={item}
              markItem={markItemBought}
              unmarkItem={unmarkItemBought}
              removeItem={removeItem}
            />
          }
        />

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              color="#1f5146"
              fontSize={18}
              placeholderTextColor="#1f5146"
              placeholder="Digite a tarefa..."
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
            />
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={addItem}>
            <Ionicons name="add" size={36} color="#1f5146" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}