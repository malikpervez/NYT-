import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native"

import BookItem from "./src/BookItem"

const mockBooks = [
    {
        rank: 1,
        title: "Gathering Prey",
        author: "John Sandford",
        book_image: 
        "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg"
    },
    {
        rank: 2,
        title: "Memory Man",
        author: "David Baldacci",
        book_image: 
        "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg"
    }

];

class NYT extends Component {
    constructor(props){
        super(props);
        this.state = { data: this._addKeysToBooks(mockBooks) };
    }

    _renderItem = ({item}) => {
        return (
            <BookItem
                coverURL = {item.book_image}
                title= {item.key}
                author={item.author}
            />
        );
    }

    _addKeysToBooks = books => {
        //Takes the API response from the NYTimes
        //and adds a key property to the object
        //for rendering
        return books.map(book => {
            return Object.assign(book, {key: book.title})
        });
    };

    render(){
        return <FlatList data = {this.state.data}
        renderItem={this._renderItem} />
    }
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        paddingTop: 22
    }
});

export default NYT;