import { View, Text, Pressable } from 'react-native';
import styles from './style';

const StyledButton = (props) => {

    //const type = props.type;
    //const content = props.content;
    //const onPress = props.onPress;

    // Destructuring of Props is done below

    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#fff';
    const textColor = type === 'primary' ? '#FFFF' : '#171A20CC';

    return (
        
        <View style={styles.container}>

            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >

            <Text style={[styles.text, {color: textColor}]}>{content}</Text>

            </Pressable>

        </View>    

    );
};

export default StyledButton;