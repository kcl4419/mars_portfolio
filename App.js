import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Input from './views/components/Input';



const App= () => {
  return(
    <View style={styles.container}>
      <Text>로그인</Text>
      <Input
      inputType={'id'}
      placeholder={'아이디'}
      />
      <Input
      inputType={'password'}
      placeholder={'비밀번호'}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white'
  }
});

export default App;
