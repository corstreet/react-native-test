import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Body, Icon } from 'native-base';

import ForecastCardContent from './ForecastCardContent';

const ForecastCard = ({ item1, item2, item3, item4 }) => {
	return(
	  <Card>
	    <CardItem>
	      <Text>{ new Date().toLocaleString() }</Text>
	    </CardItem>
	    <CardItem style={styles.cardLayout}>
	      <ForecastCardContent data={{
					icon: item1.icon,
					text: item1.text,
	      		}} />
	      <ForecastCardContent data={{
					icon: item2.icon,
					text: item2.text,
	      		}} />
	      <ForecastCardContent data={{
					icon: item3.icon,
					text: item3.text,
	      		}} />
	      <ForecastCardContent data={{
					icon: item4.icon,
					text: item4.text,
	      		}} />
	    </CardItem>
	  </Card>
	)
}

export default ForecastCard;

const styles = StyleSheet.create({
  cardLayout: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardContentItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});







