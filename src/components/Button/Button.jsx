import React from 'react'
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'

import { TextButton } from './styles'

export default function Button({ children, loading, ...rest }) {

    const styles = StyleSheet.create({
        button: {
            height: 46,
            backgroundColor: '#3b9eff',
            borderRadius: 4,

            justifyContent: 'center',
            alignItems: 'center',
        }
    })

return (
    <TouchableOpacity style={styles.button} {...rest}>
        {loading ? <ActivityIndicator size="small" color="#fff" /> : (
            <TextButton >{children}</TextButton>
        )}
    </TouchableOpacity>
)
}