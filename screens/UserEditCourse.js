import React, { useReducer } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { editCourse } from '../redux/actions/actionEditCourse';
import { createCourse } from '../redux/actions/actionCreateCourse';
import { formReducer } from '../formData.js/formReducer';
import Input from '../components/Input';
import BtnForm from '../components/BtnForm';
import globalStyles from '../styles/globalStyles';

const UserEditCourse = ({ route, navigation }) => {

    const dispatch = useDispatch();

    const courseId = route.params.courseId;

    const myCourse = useSelector(state => state.courses.loggedInmemberCourses.find( course => course.id === courseId ));

    formInitialState = {
        inputValues: {
            title: myCourse ? myCourse.title : '',
            img: myCourse ? myCourse.image : '',
            price: '',
            desc: myCourse ? myCourse.description : ''
        },
        isValidInput: {
            title: myCourse ? true : false,
            img: myCourse ? true : false,
            price: myCourse ? true : false,
            desc: myCourse ? true : false
        },
        isValidForm: myCourse ? true : false
    }

    const [formState, formActionsDispatch] = useReducer(formReducer, formInitialState)

    const handlePress = () => {

        const {title, img, price, desc } = formState.inputValues;

        if ( courseId ) {
            // mise à jour
            dispatch(editCourse(courseId, title, img, desc));
        } else {
            // création
            dispatch(createCourse(title, desc, img, +price));
        }

        navigation.goBack();
    }

    const inputHandler = (inputName, text) => {

        let isValidInput = false;

        if (text.length > 0) {
            isValidInput = true;
        }


        // dispacth l'action 
        formActionsDispatch({
            type: 'INPUT_VALIDATION',
            value: text,
            isValid: isValidInput,
            input: inputName
        })
    }

    return (
        <ScrollView>
            <View style={styles.formContainer}>
                
                <Input 
                    label="Titre"
                    value={formState.inputValues.title}
                    onKeyStroke={ text => inputHandler('title', text) }
                />

                <Input 
                    label="Image (URL)"
                    value={formState.inputValues.img}
                    onKeyStroke={ text => inputHandler('img', text) }
                />

                {
                    myCourse ? null : (
                        <Input 
                            label="Prix"
                            value={formState.inputValues.price}
                            onKeyStroke={ text => inputHandler('price', text) }
                            keyboardType='decimal-pad'
                        />
                    )
                }

                <Input 
                    label="Informations"
                    value={formState.inputValues.desc}
                    onKeyStroke={ text => inputHandler('desc', text) }
                    multiline
                    numberOfLines={5}
                />

                <BtnForm 
                    btnText={formState.isValidForm ? 'Valider' : 'Veuillez remplir tous les champs'}
                    activate={formState.isValidForm ? false : true }
                    onHandlePress={handlePress}
                />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 9,
        padding: 20,
        margin: 20
    }
})

export default UserEditCourse
