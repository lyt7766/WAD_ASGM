import {
    StyleSheet, 
    Button, 
    Text, 
    View
} from 'react-native';

export function CartItem(props) {
    props.foodId = undefined;
    props.name = '';
    props.price = undefined;
    props.outOfStock = undefined;
    props.imageSource = '';

    return(
        <View>
        </View>
    );
}