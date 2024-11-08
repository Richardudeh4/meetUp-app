import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams , Stack} from 'expo-router'
import events from "../assets/events.json";
import dayjs from 'dayjs';

export default function EventPage() {
  const {id} = useLocalSearchParams();
  const event = events.find((e) => e.id === id);

  if(!event){ 
    return <Text>Event not found 🥲</Text>
  }
  return (
    <View className='p-3 bg-white flex-1 gap-3'>
        <Stack.Screen options={{title: "Event", headerBackTitleVisible: false, headerTintColor: "black"}}/>
        <Image
        source={{uri:event.image}} 
       className='aspect-video w-full rounded-xl'
      /> 
         {/* title */}
         <Text className='font-bold text-3xl' numberOfLines={2}>{event.title}</Text>
        <Text className='text-lg font-semibold uppercase text-amber-800'>
        {dayjs(event.datetime).format('ddd, D MMM')}. {dayjs(event.datetime).format('h:mm A' )}
        </Text>

        <Text className='text-lg' numberOfLines={2}>{event.description}</Text>
 
 {/* Footer */}
 <View className='absolute bottom-0 left-0 right-0 p-5 pb-10 items-center border-t-2 flex-row justify-between border-gray-400 '>
  <Text className='text-2xl  font-semibold'>Free</Text>
  <Pressable className='bg-green-500 p-5 border border-slate-300 rounded-md'>
    <Text className='text-lg font-bold text-white'>Join and RSVP</Text>
  </Pressable>
 </View>
    </View>
  )
}

