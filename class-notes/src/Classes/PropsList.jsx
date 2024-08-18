import PropTypes, { number } from 'prop-types'

function PropList(props) {

    // List directly into the App folder, and using props to organize it
    const category = props.category
    const itemList = props.items
    
    const listsItems = itemList.map(item => <li key={item.id}>
                                                    {item.name}: &nbsp;
                                                    {item.calories}</li>)

    return (
        <>
        <h3>{category}</h3>
        <ul>{listsItems}</ul>
        </>
    )

}

PropList.defaultProps = {
    category: 'Category',
    items: [],
}
PropList.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number
    }))
}

export default PropList