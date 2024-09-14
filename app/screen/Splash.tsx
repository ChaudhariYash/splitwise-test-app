import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {View,Text,Image,StyleSheet} from 'react-native';

const Splash = () =>{
    
    const navigation = useNavigation();
    
    useEffect(()=>{
        setTimeout(()=> {
            navigation.navigate("welcome");
        },2000);
    },[]);
    return(
        <View  style={styles.container}>
            <Text>hello word </Text>
            <Image source={require("../../assets/images/topcorner.png")}
               />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
  
  

export default Splash;