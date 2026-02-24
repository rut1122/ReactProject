

import { useSelector, useDispatch } from 'react-redux';
import { deleteProject } from '../store/projectsSlice';
import AddProject from './AddProject'; // ייבוא הקומפוננטה של ההוספה שיצרנו קודם

const Projects = () => {
    // שליפת רשימת הפרויקטים מה-Store
    const projects = useSelector(state => state.projects.list);
    const dispatch = useDispatch();

    return (
        <div style={{ padding: '20px', direction: 'rtl' }}>
            <h1>ניהול פרויקטים ({projects.length})</h1>
            
            {/* הוספת הקומפוננטה של הטופס מעל הרשימה */}
            <AddProject />

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {projects.map((p) => (
                    /* כאן מתחיל התיקון של העיצוב לכל כרטיס פרויקט */
                    <div key={p.id} style={{ 
                        border: '1px solid #ddd', 
                        padding: '15px', 
                        borderRadius: '8px', 
                        width: '250px',
                        minHeight: '150px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between', // דוחף את התוכן למעלה ואת הכפתור למטה
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <div>
                            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{p.name}</h3>
                            <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>{p.description}</p>
                            <small style={{ color: '#888' }}>תאריך יעד: {p.date}</small>
                        </div>
                        
                        {/* כפתור המחיקה שמעוצב לצד שמאל/למטה */}
                        <button 
                            onClick={() => dispatch(deleteProject(p.id))} 
                            style={{ 
                                backgroundColor: '#ff4d4d', 
                                color: 'white', 
                                border: 'none', 
                                padding: '8px', 
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginTop: '15px',
                                alignSelf: 'flex-end' // מיישר את הכפתור לצד
                            }}
                        >
                            מחק פרויקט
                        </button>
                    </div>
                ))}
            </div>

            {/* הודעה במידה ואין פרויקטים */}
            {projects.length === 0 && (
                <p style={{ marginTop: '20px', color: '#888' }}>אין פרויקטים במערכת, הגיע הזמן להוסיף אחד!</p>
            )}
        </div>
    );
};

export default Projects;