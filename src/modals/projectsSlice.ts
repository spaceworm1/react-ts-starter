import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store/store';

interface Projects {
    projects: string[];
}

const initialState: Projects = {
    projects: [],
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state: Projects, action: PayloadAction<string>) => {
            state.projects = [action.payload, ...state.projects];
        },
    },
});

//* Selectors
export const selectProjects = (state: RootState) => state.projects.projects;

//* Actions
export const { addProject } = projectSlice.actions;

export default projectSlice.reducer;
