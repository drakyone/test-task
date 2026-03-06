import axios from 'axios';
import {License, Repos} from "./interfaces";
import {MONTH_AGO_DATE, PAGE_STEP} from "./constants";

export const mainGitHubUrl: string = `https://api.github.com/`;

export const getTopJsRepos = async (page: number, license: string, projectName: string) => {
    try {
        const { data } = await axios.get<Repos>(`${mainGitHubUrl}search/repositories?q=${projectName} in:name+created:>${MONTH_AGO_DATE}+language:javascript+license:${license}&sort=stars&order=desc&per_page=${PAGE_STEP}&page=${page}`)
        return { data }
    } catch (e) {
        const { message } = e;
        return { message };
    }
}

export const getLicenses = async () => {
    try {
        const { data } = await axios.get<License[]>(`${mainGitHubUrl}licenses`)
        return { data }
    } catch (e) {
        const { message } = e;
        return { message };
    }
}


