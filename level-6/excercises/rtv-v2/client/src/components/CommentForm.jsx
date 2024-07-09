import { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';


function CommentForm(props) {

    const [formData, setFormData] = useState({
        comment: ''
    })

    const { addComment } = useContext(UserContext)

    const { issueId } = props

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        addComment(issueId, formData)
        setFormData({comment: ''})
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
            placeholder='Comment'
            name='comment'
            value={formData.comment}
            onChange={handleChange}
            />
            <button>Leave Comment</button>
        </form>
     );
}

export default CommentForm;