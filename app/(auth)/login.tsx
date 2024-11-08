import React, { useState } from 'react'
import { Alert, StyleSheet, View, AppState , TextInput, Button, Pressable, Text } from 'react-native'
import { supabase } from '../../utils/supabase';
import { Stack } from 'expo-router';


// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <View className='p-5 gap-3 bg-white items-center justify-center flex-1 pt-10'>
        <Text className=' text-bold text-3xl -mt-10'>Welcome to Friend's meetup</Text>
        <Stack.Screen options={{headerTitle: "Sign In / Sign Up"}}/>
        <TextInput
          onChangeText={(text) => setEmail(text)} 
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          className='border border-gray-200 p-3 w-full rounded-md'
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
          className='border border-gray-200 w-full p-3 rounded-md'
        />
        <View className='flex flex-row gap-6 '>
        <Pressable 
         onPress={() => signInWithEmail()} 
         disabled={loading} 
         className='border-green-500 border-2  p-5  items-center flex-1 rounded-md'>
    <Text className='text-lg font-bold text-green-500 '>Sign in </Text>
  </Pressable>
         <Pressable 
         onPress={() => signUpWithEmail()}
         disabled={loading} 
         className='bg-green-500 p-5 border flex-1 items-center border-slate-300 rounded-md'>
    <Text className='text-lg font-bold text-white'>Sign up</Text>
  </Pressable>
        </View>
      
        {/* <Button title="Sign in" /> 
        <Button title="Sign up" disabled={loading}  /> */}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})