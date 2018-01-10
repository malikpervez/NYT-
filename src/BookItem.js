import React, { Component } from "react";

import { StyleSheet, Text, View, Image, ListView } from "react-native";

//this component cycles through the api and renders a cells in a flatlist within App.js

class BookItem extends Component {
    render(){
        return (
            //Container and each cell of a BookItem
            <View style = {styles.bookItem}>
                <Image style  = {styles.cover} source = {{ uri: this.props.coverURL}}/>
                <View style = {styles.info}>
                    <Text style = {styles.author}>{this.props.author}</Text>
                    <Text style = {styles.title}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bookItem: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#AAAAAA",
        borderBottomWidth: 2,
        padding: 5,
        height: 175
    },
    cover: {
        flex: 1,
        height: 150,
        resizeMode: "contain"
    },
    info: {
        flex: 3,
        alignItems: "flex-end",
        flexDirection: "column",
        alignSelf: "center",
        padding: 20
    },
    author: { fontSize: 18 },
    title: {fontSize: 18, fontWeight: "bold"}
});
export default BookItem;