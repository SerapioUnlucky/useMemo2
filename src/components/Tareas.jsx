import React from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = React.useState([]); 
    const [contador, setContador] = React.useState(1000);

    const guardarTareas = (e) => {

        e.preventDefault();

        setTareas(tarea => [...tarea, {titulo: e.target.titulo.value, descripcion: e.target.descripcion.value}]);

    }

    const eliminarTarea = (id) => {

        const nuevaLista = tareas.filter((tarea, index) => index !== id);

        setTareas(nuevaLista);

    }

    const sumar = (e) => {

        setContador(contador + 1);

    }

    const contadoresPasados = (acumulacion) => {

        for(let i = 0; i < acumulacion; i++){
            console.log("Ejecutando acumulacion de contadores pasados...");
        }

        return 'Contador manual de tareas: '+acumulacion;

    }

    const memoContadores = React.useMemo(() => contadoresPasados(contador), [contador]);

    return (
        <div>

            <h1>Mis tareas</h1>

            <form className='tareas-container' onSubmit={guardarTareas}>

                <input type="text" name='titulo' placeholder='Titulo de la tarea' required/>

                <br/>

                <textarea name='descripcion' placeholder='Descripcion de la tarea' required></textarea>

                <br/>

                <input type="submit" value="Guardar" />

            </form>

            <h2>{memoContadores}</h2>
            <button onClick={sumar}>Sumar</button>

            <h2>Lista de tareas</h2>

            <ul>

                {tareas.map((tarea, index) => (

                    <li key={index}>
                        <h3>{tarea.titulo}</h3>
                        <p>{tarea.descripcion}</p>
                        <button onClick={() => eliminarTarea(index)}>X</button>
                    </li>

                ))}

            </ul>

        </div>
    )
}
