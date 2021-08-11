import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CoursesOverview from './CoursesOverview';
import globalStyles from '../styles/globalStyles';
import { AntDesign } from '@expo/vector-icons'; 

const PaidItems = ({ totalPrice, date, courseDetails}) => {

    const [isShowing, setIsShowing] = useState(false);

    const handleShow = () => {
        setIsShowing( prevState => !prevState )
    }

    /*

19:16
PaymentModel {
  "courses": Array [
        PaidCourse {"id": "1", "price": 99.99, "title": "Fomation JavaScript Moderne",},
        PaidCourse {"id": "2","price": 49.99,"title": "Coder facebook avec React JS",},
    ],
    "date": "05 06 2021 07:16",
    "id": "1622913396473",
    "total": 149.98,
    }

    */

    return (
        <ScrollView style={styles.paidCoursesContainer}>
            <View style={styles.paidCourses}>
                <Text style={styles.totalPaid}>{totalPrice.toFixed(2)} €</Text>
                <Text style={styles.date}>{date}</Text>
            </View>

            <TouchableOpacity
                onPress={ handleShow }
                style={styles.iconBtn}
            >
                <AntDesign 
                    name={isShowing ? "minuscircleo" : "pluscircleo"} 
                    size={24} 
                    color={globalStyles.green}
                />
            </TouchableOpacity>

            {
                isShowing && (
                    <View style={styles.detailPaidCourses}>
                        {
                            courseDetails.courses.map( course => (
                                <CoursesOverview 
                                    key={course.id}
                                    title={course.title}
                                    price={course.price}
                                />
                            ))
                        }
                    </View>
                )
            }
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    paidCoursesContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        margin: 20,
        padding: 15
    },
    paidCourses: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalPaid: {
        fontSize: 18
    },
    date: {
        fontSize: 16
    },
    iconBtn: {
        alignSelf: 'flex-end'
    },
    detailPaidCourses: {
        marginTop: 20,
        borderTopColor: globalStyles.lightGrey,
        borderTopWidth: 1
    }
})

export default PaidItems
