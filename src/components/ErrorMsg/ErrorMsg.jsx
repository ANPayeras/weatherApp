import './errorMsg.css'

const ErrorMsg = ({ error }) => {
    console.log(error)
    return (
        <div className='errorContainer'>
            <div className="errorCard">

                <span>{error.msg}</span>
            </div>
        </div>
    )
}

export default ErrorMsg