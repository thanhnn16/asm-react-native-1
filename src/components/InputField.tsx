import { View, Image, TextInput, Pressable } from "react-native";
import { inputStyles, marginStyles } from "../assets/styles/MyStyles";


export const PasswordInputField = (props: PasswordInputFieldProps) => {
    return (
        <View style={[inputStyles.inputContainer, marginStyles.mt32]}>
            <Image
                source={require('../../../assets/images/icons/lock.png')}
                style={inputStyles.icon}
            />
            <TextInput
                style={inputStyles.input}
                placeholder={props.placeholder}
                placeholderTextColor="#9CA3AF"
                secureTextEntry={props.visible}
                value={props.password}
                onChangeText={text => {
                    props.setPassword(text);
                    props.setError(passwordValidator(text));
                }}
            />
            <Pressable
                style={inputStyles.icon}
                onPress={() => props.setVisible(!props.visible)}
            >
                <Image
                    source={props.visible ? require('../../../assets/images/icons/input_field_icons/eye.png') : require('../../../assets/images/icons/input_field_icons/eye-slash.png')}
                    style={inputStyles.icon}
                />
            </Pressable>
        </View>
    );
} 

type PasswordInputFieldProps = {
    password: string,
    placeholder: string,
    setPassword: (password: string) => void,
    setError: (error: string) => void,
    visible: boolean,
    setVisible: (visible: boolean) => void,
}

const passwordValidator = (password: string) => {
    if (password.length < 6) {
        return 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    return '';
}
    