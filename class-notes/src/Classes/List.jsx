function List() {

    // Array List 
    // const fruits = ['apple', 'strawberry', 'banana', 'melon', 'grapes']

    // Without maping the items, the fruits constant will return one fruit after the other without any space
    // const listsItems = fruits.map(fruit => <li>{fruit}</li>)

    // return (
    //     <ul>{listsItems}</ul>
    // )

    const fruits = [
        {id: 1, name: 'apple', calories: 95}, 
        {id: 2, name: 'strawberry', calories: 68}, 
        {id: 3, name: 'banana', calories: 35}, 
        {id: 4, name: 'melon', calories: 105}, 
        {id: 5, name: 'grapes', calories: 30}
    ]

    // Alfabetical Order: fruits.sort((a,b)=> a.name.localeCompare(b))
    // Reverse alfabetical: fruits.sort((a,b)=> b.name.localeCompare(a))
    // Numeric Order: fruits.sort((a,b)=> a.calories - b.calories)
    // Reverse Numeric: fruits.sort((a,b)=> b.calories - a.calories)

    // Array based on a filter
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 50)
    

    const listLowCalFruits = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                    {lowCalFruit.name}: &nbsp;{lowCalFruit.calories}</li>)

    // Each listItem should contain a key, useing a database we usually use the unique id for the key, cause there can be two names exaclty the same, but the id will be one for each
    const listsItems = fruits.map(fruit => <li key={fruit.id}>
                                                    {fruit.name}: &nbsp;{fruit.calories}</li>)

    return (
        <>
        <ul>{listLowCalFruits}</ul>
        <ul>{listsItems}</ul>
        </>
    )

}

export default List