import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native"

import BookItem from "./src/BookItem"
import fetchBooks from "./src/API"


class NYT extends Component {
    constructor(props){
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        this._refreshData();
    }

    _renderItem = ({item}) => {
        return (
            //render each item from api and formats data into props
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

    _refreshData = () => {
        //using aync function to refresh live data into each cell
        fetchBooks().then(books => {
            this.setState({ data: this._addKeysToBooks(books)})
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