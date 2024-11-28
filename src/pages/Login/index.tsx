import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { style } from "./styles";
import Logo from '../../assets/logo.png'; // Certifique-se de que o caminho está correto

export default function Login() {
  // Hooks para gerenciar os valores dos inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function getLogin() {
    try {
         if(!email || !password) {
         return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
        }

        Alert.alert('Logado com sucesso');

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      {/* Topo com a logo */}
      <View style={style.Top}>
        <Image 
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
      </View>

      {/* Área do meio com os campos de entrada */}
      <View style={style.Mid}>
        <Text style={style.text}>Login</Text>

        <Text style={style.label}>Email</Text>
        <TextInput
          style={style.input}
          value={email}
          onChangeText={(text) => setEmail(text)} // Atualiza o estado do email
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        <Text style={style.label}>Senha</Text>
        <TextInput
          style={style.input}
          value={password}
          onChangeText={(text) => setPassword(text)} // Atualiza o estado da senha
          placeholder="Digite sua senha"
          secureTextEntry={true} // Oculta a senha
        />
      </View>

      {/* Área inferior com o botão de entrar e registrar */}
      <View style={style.Bottom}>
        <TouchableOpacity
          style={style.button}
          onPress={getLogin} // Chama a função de login
        >
          <Text style={style.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // Lógica para redirecionar para uma tela de registro
            console.log("Ir para tela de registro");
          }}
        >
          <Text style={style.registerText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
