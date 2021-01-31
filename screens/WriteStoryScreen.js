import React from "react";
import {Text,View} from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default class WriteStory extends React.Component{
    render(){
        return(
         <View style={{flex:1 , justifyContent:"center" , alingItems:"center"}}>
            <Text>
                WRITE
            </Text>

            <TouchableOpacity style={styles.submitButton}>
               <Text styles={styles.submitButtonText}>
                 SUBMIT
               </Text>
           </TouchableOpacity>
         </View>
        )
    }
}