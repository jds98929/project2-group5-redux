export const registerTypes = {
    CREATE_FIRSTNAME: 'CREATE_FIRSTNAME',
    CREATE_LASTNAME: 'CREATE_LASTNAME',
    CREATE_USERNAME: 'CREATE_USERNAME',
    CREATE_PASSWORD: 'CREATE_PASSWORD',
    ERROR_MESSAGE: 'ERROR_MESSAGE'
}

export const createFirstName = (firstName: string) => {
    return {
      payload: {
        firstName
      },
      type: registerTypes.CREATE_FIRSTNAME
    }
}
export const createLastName = (lastName: string) => {
    return {
      payload: {
        lastName
      },
      type: registerTypes.CREATE_LASTNAME
    }
}  
export const createUsername = (username: string) => {
    return {
      payload: {
        username
      },
      type: registerTypes.CREATE_USERNAME
    }
}  
export const createPassword = (password: string) => {
    return {
      payload: {
        password
      },
      type: registerTypes.CREATE_PASSWORD
    }
}
export const showError = (errorMessage: string) => {
    return {
      payload: {
        errorMessage
      },
      type: registerTypes.ERROR_MESSAGE
    }
}   