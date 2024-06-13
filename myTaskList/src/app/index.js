import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../assets/icone.jpg')}
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          My Task List
        </Text>
        <Text style={styles.text}>
          Monte sua lista de afazeres e organize o seu dia!
        </Text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}>Acessar</Text>
        </Link>
      </View>
      <StatusBar style="light" backgroundColor='#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1e4e0',
  },
  containerImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: '#aed8cf',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1f5146',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    color: '#1f5146',
    textAlign: 'center'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#d1e4e0',
    bottom: '15%',
    alignSelf: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    width: '60%',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#1f5146',
    fontWeight: 'bold',
  }
});