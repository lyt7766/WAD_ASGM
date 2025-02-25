import React from 'react';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import { AllMenu } from '../../screens/AllMenu.js';

function PlusButton(props) {
	/* props of Pressable will be inherit by PlusButton */
	return(
		<Pressable {...props}>
			<Image source={require('./plusIcon.jpg')} style={styles.icon} />
		</Pressable>
	);
}

function MinusButton(props) {
	return(
		<Pressable {...props}>
			<Image source={require('./minusIcon.png')} style={styles.icon}/>
		</Pressable>
	);
}

/** 
 * @memberof screen.CartScreen 
 * @requires menuData information of the food, array of objects
 * 
 * @property {Number} props.item_id
 * @property {Function(Number)} props.onQuantityChang
 */

export function CartItem(props) {
    let item = AllMenu[props.item_id];

	function goToFoodDetailsPage(item_id) {
		// props.navigation.navigate('Food Details', {
		// 	index: propsitem_id
		// });
	}

    return(
        <View style={styles.container}>
			<Pressable 
				onPress={() => goToFoodDetailsPage(props.item_id)}
				style={styles.item}
			>
				<Image source={item.image} style={styles.image}/>
			</Pressable>
			<View style={styles.label}>
				<Text>{item.name}</Text>
				<Text>{`RM ${item.price.toFixed(2)}`}</Text>
				
				<View style={styles.modifyQuantity}>
					<MinusButton onPress={() => props.onQuantityChange(props.quantity - 1)} /> 
					<Text style={styles.quantity}>{props.quantity}</Text>
					<PlusButton onPress={() => props.onQuantityChange(props.quantity + 1)} />			
				</View>
			</View>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		display:'flex',
		flexDirection:'row',
		backgroundColor: 'rgb(230, 230, 230)',
		marginBottom: 10,
	},
	item: {
		display:'flex',
		flexDirection:'row',
	},
	label: {
		fontSize: 16,
		marginLeft: 10,
		marginTop: 5,
	},
	image: {
		width: 170,
  		height: 100,
		marginLeft: 0
	},
	icon: {
		width: 25,
   		height: 25,
	},
	modifyQuantity: {
		marginTop: 5,
		display:'flex',
		flexDirection:'row',
		backgroundColor: 'white',
		width: 80,
	},
	quantity: {
		fontSize: 17,
		paddingHorizontal: 10,
	}
});