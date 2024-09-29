
import { Text, View } from "react-native";
import { Link, router } from "expo-router";
import { Pressable } from "react-native";
export default function Index() {
  return (<>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap:20,
      }}
      >
        
      <Pressable style={styles.button} onPress={()=>{router.push("/sign-in")}}>
        <Text style={styles.buttonText}>Click to go to Sign-in</Text>
      </Pressable>
      
      <Pressable style={styles.button2} onPress={()=>{router.push("/sign-up")}}>
        <Text style={styles.buttonText}>Click to go to Sign-up</Text>
      </Pressable>
        
      </View>
      </>
  );
}

const styles = {
  button: {
    flex:0.1,
    width:300,
    alignItems: 'center',
    justifyContent: 'center',
    height:0,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  button2: {
    flex:0.1,
    width:300,
    alignItems: 'center',
    justifyContent: 'center',
    height:0,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:15,
    
  },
}
