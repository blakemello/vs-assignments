import { Item } from "./Item"

export const List = (props) => {

    return (
        <div>
            {props.items.map(item => (
                <Item 
                    key={item._id}
                    {...item} 
                    deleteItem={props.deleteItem}
                    editItem={props.editItem}
                    />
            ))}
        </div>
    )
}