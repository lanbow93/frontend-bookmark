import {Form} from 'react-router-dom'

function NewForm(props){
    return(

        <Form action="/create" method="post" className='formField'>
            <label>Name: </label>
            <input type="input" name="title" placeholder="bookmark" />
            <label>URL: </label>
            <input type="input" name="url" placeholder="http://" />
            <input type="submit" value="Add Bookmark" />
        </Form>
    )
}
export default NewForm;