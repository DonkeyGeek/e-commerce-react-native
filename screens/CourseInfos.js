import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/actionAddToCart';
import globalStyles from '../styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';

const CourseInfos = ({navigation, route}) => {
    const courseId = route.params.courseId;

    const dispatch = useDispatch();
    
    const selectedCourse = useSelector(state => state.courses.existingCourses.find( course => course.id === courseId ))

    const handleAddToCart = () => {
        dispatch(addToCart(selectedCourse));
        navigation.goBack();
        alert('Formation ajoutée au panier');
    }

    return (
        <View>
            <ScrollView style={styles.scroll}>
                <Image 
                    source={{uri: selectedCourse.image}}
                    style={styles.courseImage}
                />

                <View style={styles.courseDetails}>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                </View>
            </ScrollView>

            <View style={styles.footerContainer}>
                <View style={styles.footerTop}>
                    <View style={styles.coursePriceWrapper}>
                        <Text style={styles.coursePrice}>{selectedCourse.price.toFixed(2)} €</Text>
                    </View>
                </View>
                <View style={styles.footerBottom}>
                    <MaterialIcons 
                        name="arrow-back-ios"
                        size={24}
                        color={globalStyles.white}
                        onPress={() => navigation.goBack() }
                    />

                    <TouchableOpacity
                        onPress={ handleAddToCart }
                    >
                        <View style={styles.btnAddToCart}>
                            <Text style={styles.btnAddToCartText}>Ajouter au panier</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: globalStyles.white,
        height: '80%'
    },
    courseImage: {
        width: '100%',
        height: 250
    },
    courseDetails: {
        padding: 20,
        alignItems: 'center'
    },
    courseDescription: {
        color: globalStyles.dimGray,
        fontSize: 17,
        marginHorizontal: 20,
        marginVertical: 10
    },
    footerContainer: {
        height: '20%',
    },
    footerTop: {
        height: '40%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    coursePriceWrapper: {
        paddingRight: 40
    },
    coursePrice: {
        fontSize: 24,
        color: globalStyles.green
    },
    footerBottom: {
        backgroundColor: globalStyles.green,
        height: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    btnAddToCart: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 25,
        backgroundColor: globalStyles.lightOrange
    },
    btnAddToCartText: {
        fontSize: 19
    }
})

export default CourseInfos
