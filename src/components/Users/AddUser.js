
const AddUser = props => {
    const adduserHandler = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={adduserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text'></input>
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='number'></input>
            <button type='submit'>Add User</button>
        </form>
    )
}

export default AddUser