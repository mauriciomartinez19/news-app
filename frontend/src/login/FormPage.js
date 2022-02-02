import './create-user/createUser.css'
import FormInput from './FormInput'

const FormPage = ({ handleSubmit, title, formLabels, buttonTitle, secondButton }) => {

    return (
        <div className="create-user-page">
            <div className='create-user-box'>
                <form className="create-user-box-form" onSubmit={handleSubmit}>
                    <h3 className='create-user-box-title'>{title}</h3>
                    {formLabels.map(formLabel => {
                        const { formName, placeholder, defaultValue, handleChange, type } = formLabel
                        return (
                            <FormInput
                                formName={formName}
                                placeholder={placeholder}
                                defaultValue={defaultValue}
                                handleChange={handleChange}
                                type={type}
                            />
                        )
                    })}

                    <button className='create-user-btn'>{buttonTitle}</button>
                </form>
                {secondButton &&
                    <a href={secondButton.href} className="create-new-user-btn-tag-a">
                        <button className='create-new-user-btn'>{secondButton.buttonName}</button>
                    </a>}

            </div>
        </div>
    )
}

export default FormPage