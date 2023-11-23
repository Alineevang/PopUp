const Exibir = ({index, task}) => {
return (
    <div>
        <h3>To do list</h3>
            <input type="text" placeholder="Digite uma tarefa" value={task} onChange={(param) => setTask(param.target.value)}></input>
            <button onClick={addTask}>Cadastrar</button>
            <p>#{index}<span>{task}</span></p>
        </div>
)
    }

    export default Exibir;

    