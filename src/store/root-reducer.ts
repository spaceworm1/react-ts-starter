import { combineReducers } from 'redux';

import projectsSlice from '../modals/projectsSlice';

export const reducer = combineReducers({
    projects: projectsSlice,
});
