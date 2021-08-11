import PaymentModel from '../../data/PaymentModel';
import { ADD_PAYMENT } from '../constants';
import moment from 'moment';

const initialState = {
    payments: []
}

const reducerPayment = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PAYMENT:
            // {id, courses, total, date}
            const newPayment = new PaymentModel(
                Date.now().toString(),
                action.orderInfos.courses,
                action.orderInfos.total,
                moment(new Date()).format('DD MM YYYY hh:mm')
            );

            return {
                ...state,
                payments: state.payments.concat(newPayment)
            }
    
        default:
            return state;
    }
}

export default reducerPayment;