import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import tw from "twrnc"

const KeyboardAvoidingWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView style={tw`flex-1`}>
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingWrapper