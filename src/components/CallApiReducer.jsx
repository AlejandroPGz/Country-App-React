import { useReducer } from "react"
import { useForm } from "../hooks/useForm"
import axios from "axios"

const initialState = {}

const tareaReducer = async (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET":
        const response = await axios.get(`${action.payload}`);
        console.log(response);
    default:
      return state
  }
}

// console.log(tareaReducer(initialState, agregarTarea));

export const ReducerComponent = () => {

  const [state, dispatch] = useReducer(tareaReducer, initialState)
  const { tarea, formState, onInputChange } = useForm({ tarea: "" })

  const agregarTarea = (event) => {
    event.preventDefault()
    if (formState.tarea == "") return
    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizada: false
    }
    const action = {
      type: "[TAREAS] Agregar Tarea",
      payload: tarea
    }
    dispatch(action)
  }

  const finalizarTarea = ({id}) => {
    const action = {
      type: "[TAREAS] Finalizar Tarea",
      payload: id
    }
    dispatch(action)
  }

  const borrarTarea = (id) => {
    console.log(id);
    const action = {
      type: "[TAREAS] Borrar Tarea",
      payload: id
    }
    dispatch(action)
  }

  const borrarTodas = () => {
    const action = {
      type: "[TAREAS] Eliminar Tareas",
      payload: ""
    }
    dispatch(action)
  }

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Ingresa nueva tarea</label>
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="Ingresa Tarea"
            value={tarea}
            onChange={onInputChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" onClick={borrarTodas} className="btn btn-danger">Borrar Todas</button>
      </form>

      <hr />

      <ul className="list-group">
        {state.map(item => {
          return (
            <li className="list-group-item d-flex justify-content-between" key={item.id}>
            <span>{item.tarea}</span>
            <span>{item.finalizada ? "✅" : "❌"}</span>
            <input type="checkbox" value={item.finalizada} onChange={() => finalizarTarea(item)}></input>
            <button className="btn btn-danger" onClick={() => borrarTarea(item.id)}>Borrar</button>
            </li>
          )
        })}
      </ul>

    </>
  )
}
