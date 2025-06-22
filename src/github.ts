import fetch from 'node-fetch'
import { GitHubIssues } from './types';

export async function fetchUnlabeledIssues(repo: string) {
    const url = `https://api.github.com/repos/${repo}/issues`;

    const response = await fetch(url);

    if (!response.ok) {
            throw new Error(`Error al obtener issues: ${response.status} ${response.statusText}`);
        }

    const issues: GitHubIssues[] = await response.json();
        
    const unlabeled = issues.filter((issues: any) => issues.labels.length === 0);

    return unlabeled
}