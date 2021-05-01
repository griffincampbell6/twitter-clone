import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Feed from '../components/Feed';
import NewTweetButton from '../components/NewTweetButton';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import tweets from '../data/tweets';
import ProfilePicture from '../components/ProfilePicture';

export default function NewTweetScreen() {

    const [tweet, setTweet] = useState("");
    const [imageUri, setImageUri] = useState("");

    const onPostTweet = () => {
        console.log(tweet);
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer} >
                <AntDesign name="close" size={30} color={Colors.light.tint} />
                <TouchableOpacity style={styles.button} onPress={onPostTweet} >
                    <Text style={styles.buttonText} >Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.newTweetContainer} >
                <ProfilePicture image={"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png"}/>
                <View style={styles.inputsContainer}>
                    <TextInput 
                        value={tweet}
                        onChangeText={(value) => setTweet(value)}
                        multiline={true}
                        placeholder={"What's happening?"} 
                        style={styles.tweetInput}
                    />
                    <TextInput 
                        value={imageUri}
                        onChange={(value) => setImageUri(value)}
                        placeholder={"Image url (optional)"} 
                        style={styles.imageInput}
                    />    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 10,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  tweetInput: {

  },
  imageInput: {

  }
});