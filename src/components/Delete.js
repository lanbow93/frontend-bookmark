import { Form } from "react-router-dom"

function Delete(props) {
    return <Form action={`/${props.id}/delete`} method="post">
        <input type="submit" value="X" />
    </Form>
}

export default Delete