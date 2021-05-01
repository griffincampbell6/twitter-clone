import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

const onPress = () => {
    console.warn("Open new tweet");
}

const NewTweetButton = () => (
    <TouchableOpacity 
        style={styles.button} 
        onPress={onPress} 
        activeOpacity={0.8}
    >  
        <MaterialCommunityIcons name="feather" size={30} color="white" />
    </TouchableOpacity>
)

export default NewTweetButton;