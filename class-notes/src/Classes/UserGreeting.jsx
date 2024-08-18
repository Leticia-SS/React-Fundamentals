import PropTypes from 'prop-types'
function UserGreeting(props) {

    // if(props.isLoggedIn){
    //     return <h2 className="welcome-message">Welcome {props.username}</h2>
        
    // }
    // // Não é necessário escrever toda a estrutura do código else, somente de um return
    // // else {
    // //     <>
    // //         <h2>Please Log in to continue . . .</h2>
    // //     </>
    // // }

    // return <h2 className="login-prompt">Please log in to continue . . .</h2>

    // // Pode usa ternário também para deixar o código menor e mais otimizado
    // // return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : 
    // //                           <h2>Please log in to continue . . .</h2>)


    // Outra maneira de fazer
    const loginPrompt = <h2 className="login-prompt">Please log in to continue . . .</h2>

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)

}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest'
}

export default UserGreeting