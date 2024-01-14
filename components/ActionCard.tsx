import { StyleSheet, Text, View, Linking, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 21 - ES12
            </Text>
        </View>
        <Image 
        source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7CTVHh7xCDlb8QSIG1BdvxYYN6OijnakkA&usqp=CAU'
          }}
          style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore facilis quas cum, eaque consequuntur eligendi quam ea 
            numquam illum doloremque recusandae voluptates praesentium 
            alias at cupiditate officia facere quos aliquid!</Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
          onPress={() => openWebsite('https://uiverse.io/andrew-demchenk0/little-treefrog-9')}
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => openWebsite('https://instagram.com/hiteshchoudharyofficial/')}
          >
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
    },
    card: {
      width: 350,
      height: 370,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal:16,
    },
    elevatedCard: {
      backgroundColor:'#E07C24',
      elevation: 3,
      shadowOffset:{
        width: 1,
        height: 1
      },
      shadowColor: '#333',
      shadowOpacity: 0.4,

    },
    headingContainer: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      color: '#000',
      fontSize: 16,
      fontWeight: '600'
    },
    cardImage: {
      height: 190
    },
    bodyContainer: {
      padding: 10
    },
    footerContainer: {
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    socialLinks: {
      fontSize: 16,
      color: '#000000',
      backgroundColor: '#FFF',
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 6
    },
})