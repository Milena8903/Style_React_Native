import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7CTVHh7xCDlb8QSIG1BdvxYYN6OijnakkA&usqp=CAU'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}> Pink City, jaipur</Text>
            <Text style={styles.cardDescription}> Pink City, jaipur</Text>
            <Text style={styles.cardFooter}> 12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    card: {
      width: 350,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal:16,
    },
    cardElevated: {
      backgroundColor: '#FFFFFF',
      elevation: 3,
      shadowOffset:{
        width: 1,
        height: 1,
      }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius:6,
        borderTopRightRadius: 6
    },
    cardBody: {
      flex: 1,
      flexGrow:1,
      paddingHorizontal: 12,
    },
    cardTitle: {
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 4
    },
    cardLabel: {
      color: '#000000',
      fontSize: 14,
      marginBottom: 6,
    },
    cardDescription: {
      color: '#242B2E',
      fontSize: 12,
      marginBottom: 12,
      marginTop:6,
      flexShrink: 1
    },
    cardFooter: {
      color: '#000000',
    }


})