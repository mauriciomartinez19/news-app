const FormInput = ({ formName, defaultValue, handleChange, placeholder, type }) => {
    return (
        <div className='create-user-input-box'>
            <label className='create-user-input-name'>{formName}</label>
            <input
                className='create-user-input'
                placeholder={placeholder}
                defaultValue={defaultValue}
                type={type}
                onChange={e => handleChange(e.target.value)}></input>
        </div>
    )
}

export default FormInput