import type { GithubRoot } from "$lib/interfaces/Github";

export const get = async () => {
    let res = await fetch('https://api.github.com/users/teerut26');
    let githubData: GithubRoot = await res.json();
    return {
        body: {
            githubData
        }
    }
}