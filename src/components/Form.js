// import {Form} from 'react-router-dom'

function NewForm(props){
    return(
        <Form action="/create" method="post">
            <input type="input" name="title" placeholder="bookmark" />
            <input type="input" name="url" placeholder="http://" />
            <input type="submit" value="Add" />
        </Form>
    )
}
export default NewForm;