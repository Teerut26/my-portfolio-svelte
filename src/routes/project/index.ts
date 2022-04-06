import type { Repo } from "$lib/interfaces/Github";

export const get = async () => {
    let res = await fetch('https://api.github.com/users/Teerut26/repos');
    let githuRepos: Repo[] = await res.json();
    return {
        body: {
            githuRepos
        }
    }
}