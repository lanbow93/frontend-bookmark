import {Form} from 'react-router-dom'
import { useParams } from 'react-router-dom';

function UpdateForm(props){
    const id = useParams()
    const queries = new URLSearchParams(window.location.search)
    console.log(id.id)
    return(
        <div className="wholePage">
            <Form action={`/${id.id}/update`} method="post" className='formField'>
                <h2>Update Bookmark: {queries.get('title')}</h2>
                <label>Name: </label>
                <input type="input" name="title" defaultValue={queries.get("title")} />
                <label>URL: </label>
                <input type="input" name="url" defaultValue={queries.get("url")} />
                <input type="submit" value="Update Bookmark" />
            </Form>
        </div>
    )
}
export default UpdateForm;