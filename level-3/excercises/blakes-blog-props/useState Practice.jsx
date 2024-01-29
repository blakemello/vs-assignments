// 1) Pass in a new color of your choosing in place of the old one. 
//    Hint: we don’t care what the previous color was.
const [color, setColor] = useState("pink")

setColor("red")


// 2) Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.
const [color2, setColor2] = useState("pink")

setColor2(prevColor2 => prevColor2 === "pink" ? "blue" : "pink")

// 3) Add a new person object to the following people array in state. You can hard-code a new object but it must be a person object with firstName and lastName properties.
const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(prevPeople => {
    [...prevPeople,
    {
       firstName: "Rusty",
       lastName: "Shackleford" 
    }
    ]
})

// 4) Change the following state-setting functions to use an implicit return

// a)
const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => 
	    [...prevColors,
        "green"]
    )

// b)
const [countObject, setCountObject] = setState({
	count: 0
})

setCountObject(prevState=> {(
	 {
		count: prevState.count + 1
	}
)})

// 5) Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.
const [person, setPerson] = useState({
		firstName: "John",
		lastName: "Smith"
})

setPerson(prevPerson => ({...prevPerson, age: 30}))

// 6) What’s wrong with the following state update?
const [colors2, setColors2] = useState(["pink", "blue"])

setColors2(prevColors2 => [ ...prevColors2, "green"])