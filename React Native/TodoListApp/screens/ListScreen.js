import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator,ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';

import globalStyles from '../styles/globle';
import { Colors } from '../constants';
import CustomButton from '../components/CustomButton';
import Tasks from '../components/Tasks';
import { getTasks } from '../store/actions/taskActions';
import { setActiveListId } from '../store/actions/listActions';

const ListScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks(() => setLoading(false)));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setActiveListId(id));
  }, [dispatch, id]);

  if (loading) {
    return <ActivityIndicator color={Colors.primary} size="large" style={globalStyles.loader} />;
  }

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={require('../assets/images/pexels1.jpg')} 
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <Tasks navigation={navigation} listId={id}/>
          <CustomButton text="Add new task" icon="add" iconColor="#fff" 
            onPress={() => navigation.navigate('NewTask')} 
            style={styles.btnStyle}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,

  },
  container: {
    flex: 1,
    paddingTop:20
  },
  image:{
    flex: 1,
  },
 
});

export default ListScreen;