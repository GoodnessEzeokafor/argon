import React from "react"
import {StyleSheet, Dimensions, ScrollView, Text} from "react-native"
import {Block, theme} from "galio-framework"

import Card from "../Components/Card"
import articles from "../constants/articles"

const {width} = Dimensions.get("screen")

class Home extends React.Component{
    renderArticles=() => {
    return(
        // <Text>HELLO</Text>
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.articles}
        >
                <Block flex>
                <Card item={articles[0]} horizontal />
                    <Block flex row>
                        <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
                        <Card item={articles[2]} />
                    </Block>
                    <Card item={articles[3]} horizontal />
                    <Card item={articles[4]} full /> 
                </Block>
        </ScrollView>
    )
    }

    render(){
        return(
            // <Text>HELLO WOLRD</Text>
            <Block flex center style={StyleSheet.home}>
                {this.renderArticles()}
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    home: {
      width: width,    
    },
    articles: {
      width: width - theme.SIZES.BASE * 2,
      paddingVertical: theme.SIZES.BASE,
    },
  });
  


  export default Home