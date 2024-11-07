import  Feather  from '@expo/vector-icons/Feather';

import { Link, Stack } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View} from 'react-native';
import { EventListItem } from '~/components/event-list-item';
import Events from "../../assets/events.json";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <ScrollView>
        {
            Events.map((item, i) => (
            <EventListItem 
              key={i}
              id={item.id}
              title={item.title}
              description={item.description}
              dateTime={item.datetime}
              location={item.location}
              image={item.image}
               />
              ))
        }
 
      </ScrollView>
  
       
    </>
  );
}
