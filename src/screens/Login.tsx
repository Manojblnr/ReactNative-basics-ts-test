// src/screens/Login.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      Alert.alert('Login successful');
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={(text: string) => setUsername(text)}
        testID="username-input"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        secureTextEntry
        onChangeText={(text: string) => setPassword(text)}
        testID="password-input"
      />
      <Button title="Login" onPress={handleLogin} testID="login-button" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  label: { fontSize: 16, marginBottom: 8 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 },
});

export default Login;
