

export default function Issue(props) {

    const { user, title, description, imgUrl } = props


    return(
        <div>
            <p>{user}</p>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <img src={imgUrl} width={250}/>
        </div>
    )
}