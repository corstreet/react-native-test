import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Text, Icon } from 'native-base';

const ForecastCardContent = ({ data }) => {
	return(
	  <Body style={styles.cardContentItem}>
	    <Text>{data.text}</Text>
	    <Icon name={data.icon} />
	  </Body>
	)
}

const styles = StyleSheet.create({
  cardContentItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default ForecastCardContent;