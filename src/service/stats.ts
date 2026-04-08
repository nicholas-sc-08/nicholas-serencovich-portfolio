export async function fetchGithubData() {
    const username = "nicholas-sc-08";
    try {
        const prRes = await fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr`);
        const prData = await prRes.json();

        const commitRes = await fetch(`https://api.github.com/search/commits?q=author:${username}`, {
            headers: { 'Accept': 'application/vnd.github.cloak-preview' }
        });
        const commitData = await commitRes.json();

        const repoRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const repos = await repoRes.json();

        const stars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

        return { prs: Number(prData.total_count) || 0, commits: Number(commitData.total_count) || 0, stars: Number(stars) || 0 };
        } catch (error) {
            console.error("Erro ao buscar GitHub:", error);
            return { prs: 0, commits: 0 };
        }
    }