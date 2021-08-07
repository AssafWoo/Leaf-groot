import { ProjectType } from "../../interfaces/project";
export const LOAD_PROJECTS = '[projects] load';
export const LOAD_PROJECTS_SUCCESS = '[projects] success';
export const LOAD_PROJECTS_FAILURE = '[projects] failure';
export const SET_PROJECTS = '[projects] set';
export const SET_FAVORITE_PROJECT ='[projects] set favorite';

export const loadProjects = {
    type:LOAD_PROJECTS,
}

export const loadProjectsSuccess = (projects:Array<ProjectType>) => ({
    type:LOAD_PROJECTS_SUCCESS,
    payload:projects
});

export const loadProjectsFailure = (error:any) => ({
    type:LOAD_PROJECTS_FAILURE,
    payload:error,
});

export const setProjects = (projects:Array<ProjectType>) => ({
    type:SET_PROJECTS,
    payload:projects
});
export const setFavoriteProject = (project:any) => ({
    type:SET_FAVORITE_PROJECT,
    payload:project
});


