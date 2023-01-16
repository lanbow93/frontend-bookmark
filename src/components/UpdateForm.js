import {Form} from 'react-router-dom'
import { useParams } from 'react-router-dom';

function UpdateForm(props){
    const id = useParams()
    const queries = new URLSearchParams(window.location.search)
    console.log(id.id)
    return(
        <Form action={`/${id.id}/update`} method="post">
            <input type="input" name="title" defaultValue={queries.get('title')} />
            <input type="input" name="url" defaultValue={queries.get('url')} />
            <input type="submit" value="Update" />
        </Form>
    )
}
export default UpdateForm;