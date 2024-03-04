import { MemeItem } from "./MemeItem"

export const MemeList = (props) => {
    console.log(props.meme)
    return (
        <div>
            {props.items.map(item => (
                <MemeItem 
                    key={props.id}
                    {...item}
                    deleteMeme={props.deleteMeme}
                    editMeme={props.editMeme}
                />
            ))}
        </div>
    )
    

}