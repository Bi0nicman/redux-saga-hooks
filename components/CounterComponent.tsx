import React from "react";
import {StyleSheet,View,Button,Text, TouchableOpacity} from "react-native";
import {connect}from "react-redux";
import {useSelector,useDispatch} from "react-redux";


export default function CounterComponent() {
    const counterProp = useSelector(state => state.counter);
    const dispatcherProp = useDispatch();
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => dispatcherProp({type:'INCREASE_COUNTER'})}>
                <Text style={styles.text}>Increase</Text>
            </TouchableOpacity>
            
            <Text>{counterProp}</Text>
            <TouchableOpacity style={styles.button} onPress={() => dispatcherProp({type:'DECREASE_COUNTER'})}>
                <Text style={styles.text}>Decrease</Text>
            </TouchableOpacity>
                   
        </View>
    )
}




const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:"flex-start",
        alignItems:"center",
    },
    button:{
        width:60,
        height:30,
        backgroundColor:"blue",
    },
    text:{
        color:"#fff",
        alignSelf:"center",
    }
})