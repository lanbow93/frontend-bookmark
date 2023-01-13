import {Form} from 'react-router-dom'

function Form(props){
    return(
        <Form 
            action="/"
            method="post"
        >
            <input type="text" placeholder="bookmark" />
            <input type="url" placeholder="http://" />
            <input type="submit" value="Add" />
        </Form>
    )
}
export default Form;