import { Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import events from "../assets/events.json";

export default function EventPage() {
  const {id} = useLocalSearchParams();
  const event = events.find((e) => e.id === id);
  return (
    <View>
      <Text>
        event id : {event?.location}
        
    </Text>
    </View>
  )
}

