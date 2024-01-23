import { View, Image, TextInput, Pressable } from "react-native";
import { inputStyles, marginStyles } from "../assets/styles/MyStyles";
import { log } from "react-native-bootsplash/dist/typescript/generate";
import { useState } from "react";


export const PasswordInputField = (props: PasswordInputFieldProps) => {
  const [showPassword, setShowPassword] = useState(true);
    return (
        <View style={[inputStyles.inputContainer, marginStyles.mt8]}>
            <Image
                source={require('../../src/assets/images/icons/lock.png')}
                style={inputStyles.icon}
            />
            <TextInput
                style={inputStyles.input}
                placeholder={props.placeholder}
                placeholderTextColor="#9CA3AF"
                secureTextEntry={showPassword}
                value={props.password}
                onChangeText={text => {
                    props.setPassword(text);
                  console.log(props.password);
                    props.setError(passwordValidator(text));
                }}
            />
            <Pressable
                style={inputStyles.endIcon}
                onPress={() => {
                  setShowPassword(!showPassword)
                }
            }
            >
                <Image
                    source={showPassword? require('../../src/assets/images/icons/input_field_icons/eye.png') : require('../../src/assets/images/icons/input_field_icons/eye-slash.png')}
                    style={inputStyles.icon}
                />
            </Pressable>
        </View>
    );
}

export const SearchField = (props: SearchFieldProps) => {
    return (
        <View style={[inputStyles.inputContainer, marginStyles.mt8]}>
            <Image
                source={require('../../src/assets/images/icons/input_field_icons/search-normal.png')}
                style={inputStyles.icon}
            />
            <TextInput
                style={inputStyles.input}
                placeholder="Tìm kiếm"
                placeholderTextColor="#9CA3AF"
                value={props.search}
                onChangeText={text => {
                    props.setSearch(text);
                }}
                onSubmitEditing={() => {
                    console.log('Submit');
                }}
                inputMode={'search'}
                maxLength={255}
                multiline={false}
            />
        </View>
    );
}

type SearchFieldProps = {
    search: string,
    setSearch: (search: string) => void,
}

type PasswordInputFieldProps = {
    password: string,
    placeholder: string,
    setPassword: (password: string) => void,
    setError: (error: string) => void,
}

const passwordValidator = (password: string) => {
    if (password.length < 6) {
        return 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    return '';
}
