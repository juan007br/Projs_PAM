import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Button } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {

  function nome(){
  alert("meu nome é juan")
  }
    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Ola mundo do React Native
      </Text>
      
    <Button mode="contained" styles={styles.button} onPress={()=>{nome()}}>
      CLique Aqui
      </Button>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    border: 5.


  },
});
