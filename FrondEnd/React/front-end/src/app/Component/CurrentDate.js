export default  function TimeDemo({date}) {

    return (<div>
        {date.toLocaleDateString()}
    </div>)
}