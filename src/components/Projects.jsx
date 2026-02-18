import { useSelector, useDispatch } from 'react-redux';
import { deleteProject, addProject, addTaskToProject } from '../store/projectsSlice';

const Projects = () => {
    // שליפת הרשימה מה-Store - שים לב ל-.list
    const projects = useSelector(state => state.projects.list);
    const dispatch = useDispatch();

    return (
        <div style={{ padding: '20px', direction: 'rtl' }}>
            <h1>רשימת פרויקטים ({projects.length})</h1>
            
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {projects.map((p) => (
                    <div key={p.id} style={{ border: '1px solid black', padding: '10px', borderRadius: '8px' }}>
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                        <button onClick={() => dispatch(deleteProject(p.id))} style={{ backgroundColor: 'red', color: 'white' }}>
                            מחק אותי כדי לבדוק את ה-Redux
                        </button>
                    </div>
                ))}
            </div>
            <button onClick={() => dispatch(addProject())}>הוספת פרויקט</button>
            {projects.length === 0 && <p>אין פרויקטים ב-Store!</p>}
        </div>
    );
};

export default Projects;