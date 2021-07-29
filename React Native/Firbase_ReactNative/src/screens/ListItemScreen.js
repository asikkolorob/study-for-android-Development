import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Container,Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body } from 'native-base';

const ListItemScreen = () => {
    const MyItem = [
        {
            name:'Md.Suhag',
            year:'2019',
            phone:'01745......',
            image:'https://fdn.gsmarena.com/imgroot/reviews/19/apple-iphone-11/lifestyle/-1024w2/gsmarena_001.jpg',
            myImage:'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg',
            desc: 'I am selling this iphone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            name: 'Md.Abdullah',
            year: '2020',
            phone: '01945......',
            image: 'https://th.bing.com/th/id/OIP.0yRYWi-_f8R_rrXAc0n0fwHaEK?w=308&h=180&c=7&o=5&pid=1.7',
            desc: 'I am selling this iphone. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    ]
    const renderItem = (item) => {
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: item.myImage }} />
                                <Body>
                                    <Text>{item.name}</Text>
                                    <Text note>{item.year}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: item.image }} style={{ height: 200, width: 375, flex: 1 }} />
                                <Text>
                                    {item.desc}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text style={{marginRight:10}}>1,926 stars</Text>
                                    <Text>{item.phone}</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                    
                </Content>
            </Container>
        );
    }
    return (
        <View>
            <FlatList 
                data={MyItem}
                keyExtractor={(item) => item.phone}
                renderItem={({item}) => renderItem(item)}
            />
        </View>
    )
}

export default ListItemScreen

const styles = StyleSheet.create({})
