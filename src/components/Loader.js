import spinner from './1_9EBHIOzhE1XfMYoKz1JcsQ.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Fetching data</h1>
        </div>
    )
}

export default Loader