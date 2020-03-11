import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name='search' size={30} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 12,
    backgroundColor: '#eaeaea',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 12
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  }
})

export default SearchBar
