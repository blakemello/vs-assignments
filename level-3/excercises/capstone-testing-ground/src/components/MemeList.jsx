import { MemeItem } from "./MemeItem"

export const MemeList = (props) => {

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