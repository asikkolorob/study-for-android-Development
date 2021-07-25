import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground, StatusBar} from 'react-native';
import { useSelector } from 'react-redux';

import globalStyles from '../styles/globle';
import { Colors } from '../constants';

const Lists = ({ navigation }) => {
  const { lists } = useSelector(state => state.list);

  const itemClickHandler = (item) => {
    navigation.navigate('List', { name: item.name, id: item.id });
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={Colors.FavariteColor} barStyle="dark-content" hidden={false}/>
      <ImageBackground source={require('../assets/images/undefined.jpg')} 
          resizeMode="cover"
          style={styles.image}
        >
        <View style={styles.container}>
          {lists.length > 0 ? <FlatList 
            keyExtractor={(item) => item.id}
            contentContainerStyle={globalStyles.listContainer}
            data={lists}
            renderItem={({ item }) => <TouchableOpacity style={globalStyles.listItem} onPress={() => itemClickHandler(item)}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>}
          /> : <Text style={globalStyles.noData}>No lists</Text>}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  container: {
    paddingVertical: 20,
    flex: 1,
    
  },
  itemText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
  },
  image:{
    flex: 1,
  },
});

export default Lists;
