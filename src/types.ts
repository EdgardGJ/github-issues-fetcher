export interface GitHubIssues {
    title: string;
    user: { login: string };
    created_at: string;
    labels: any[]
}