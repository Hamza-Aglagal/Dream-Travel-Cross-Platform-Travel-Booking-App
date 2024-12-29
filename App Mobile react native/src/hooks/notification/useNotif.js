import { ALERT_TYPE, Toast } from 'react-native-alert-notification';



export const notifSuccess = (msg) => {
    Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: msg,
    })

}


export const notifyWarning = (msg) => {
    Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: msg,
    })

}


export const notifyError = (msg) => {
    Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: msg,
    })

}
