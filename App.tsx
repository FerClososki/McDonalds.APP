import {
  View, Text, Image, StyleSheet, TouchableOpacity,
  SafeAreaView, StatusBar,
  SafeAreaViewBase
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <View>
          <Image />
          <Text>McDonald's</Text>
        </View>
        <View>
          <Text>Seja Bem-Vindo!</Text>
          <Text>Escolha como prefere aproveitar sua refeição. Estamos aqui 
            para oferecer praticidade e sabor em cada detalhe!
            </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  safeArea: {

  },
  container: {

  },
  header: {

  },
  logo: {

  },
  brandNome: {

  },
  welcomeSection: {

  },
  title: {

  },
  subtitle: {

  },
  cardsRow: {

  },
  card: {

  },
  iconCircle: {

  },
  cardLabelPill: {

  },
  cardLabel: {

  },
});