const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return {...state, persons: state.persons.concat(action.newPersons)}
        case 'DELETE':
            return {...state, persons: state.persons.filter(person => person.id !== action.personID)}
    }
    return state;
};

export default reducer;