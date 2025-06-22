import { fetchUnlabeledIssues } from "./github";

async function main() {
    const repo = 'facebook/react';


    try {
        const issues = await fetchUnlabeledIssues(repo);

        console.log(`\nIssues sin etiquetas en ${repo}: ${issues.length} \n`);

        issues.forEach((issues: any) => {
            console.log('Título:', issues.title);
            console.log('Autor:', issues.user.login)
            console.log('Fecha de creació:', new Date(issues.created_at).toLocaleString());
            console.log('---')
        })
    } catch (error) {
          console.error('Ocurrió un error:', error);
    }
}

main()