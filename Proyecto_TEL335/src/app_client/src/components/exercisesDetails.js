const ExercisesDetails = ({ exercise }) => {
    return (
        <tbody>
            <tr key={exercise.id}>
                <td>{exercise.user}</td>
                <td>{exercise.type}</td>
                <td>{exercise.total}</td>
                <td>{exercise.date}</td>
                <td>{exercise.description}</td>
            </tr>

        </tbody>

       
    )
}

export default ExercisesDetails