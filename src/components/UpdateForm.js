import {Form} from 'react-router-dom'

function UpdateForm(props){
    return(
        <Form action={`/${props.id}/update`} method="post">
            <input type="input" name="title" defaultValue={props.title} />
            <input type="input" name="url" defaultValue={props.url} />
            <input type="submit" value="Update" />
        </Form>
    )
}
export default UpdateForm;