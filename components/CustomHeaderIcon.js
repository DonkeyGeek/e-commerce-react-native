import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../styles/globalStyles';

const CustomHeaderIcon = (props) => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={MaterialIcons}
            iconSize={24}
            color={globalStyles.white}
        />
    )
}

export default CustomHeaderIcon
