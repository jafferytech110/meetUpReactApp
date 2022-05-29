import classes from './Card.module.css'

function Card(props){
    return <div className={classes.card}>
        {/* it is a special properties which takes all tags from where the component properties are called */}
        {props.children}
    </div>
}

export default Card