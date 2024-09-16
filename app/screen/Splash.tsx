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
            
             <Image  style={styles.imgone} source={require("../../assets/images/topcorner.png")} />
             <Image  style={styles.imgtwo} source={require("../../assets/images/TopcornerRight.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
         flex:1,
         backgroundColor:'black',
      },
    imgone:
    {
     marginRight:100,
    //  backgroundColor:'red', 
     marginBottom:-610,
     paddingRight:100
     
        
    },
    imgtwo:
    {
        marginLeft:180,
        marginBottom:10,
    },
  });
  
  

export default Splash;