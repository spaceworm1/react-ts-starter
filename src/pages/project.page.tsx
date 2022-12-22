import { useSelector } from 'react-redux';

import { selectProjects } from '../modals/projectsSlice';

export default function ProjectsPage() {
    const data = useSelector(selectProjects);

    console.log(data);

    return (
        <>
            {data.map((el, idx) => {
                return <h1 key={idx}>{el}</h1>;
            })}
        </>
    );
}
