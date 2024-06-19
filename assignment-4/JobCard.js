// JobCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobCard = ({ imageSource, title, company, salary, location, isFeatured }) => {
  return (
    <View style={[styles.card, isFeatured ? styles.featuredCard : styles.popularCard]}>
      <Image source={imageSource} style={styles.icon} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  featuredCard: {
    backgroundColor: '#4A90E2',
    marginRight: 15,
    width: 250,
  },
  popularCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 15,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  company: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  salary: {
    fontSize: 16,
    color: 'black',
  },
  location: {
    fontSize: 14,
    color: 'black',
  },
});

export default JobCard;
