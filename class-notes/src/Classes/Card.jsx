import MountainPic from '../assets/mountain.jpg'

function  Card() {
    return (
        <div className="card">
            <img className="card-image" src={MountainPic} alt="mountain" />
            <h2 className="card-title">Card Example</h2>
            <p className="card-text">Esta é uma demosntração de um 'Card Component' que contém conteúdo reutilizável</p>
        </div>
    )
}

export default Card