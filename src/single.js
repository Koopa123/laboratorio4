import Gorras from './data/gorras.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const Gorra = Gorras.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{Gorra.name}</h1>
        <hr></hr>
        <img src={Gorra.picture}></img>
        <p>{Gorra.description}</p>
    </>);
}

export default Single;