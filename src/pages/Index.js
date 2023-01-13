import {Form, Link, useLoaderData} from 'react-router-dom'

function Index(props){
    const bookmarks=useLoaderData()
    return (
        <div>
            <h2>Add a new bookmark</h2>
            <Form />
            <h2>Bookmarks</h2>
                {bookmarks.map((bookmark)=>(
                    <div>
                        <Link to={bookmark.url}>
                            <h1>{bookmark.title}</h1>
                        
                        </Link>
                    </div>
                ))}    
        </div>
    )
}

export default Index