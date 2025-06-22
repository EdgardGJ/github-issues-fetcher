import fetch from 'node-fetch'

async function main() {
    const repo = 'facebook/react';
    const url = `https://api.github.com/repos/${repo}/issues`


    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error al obtener issues: ${response.status} ${response.statusText}`);
        }

        const issues = await response.json();
        
        const unlabeldIssues = issues.filter((issues: any) => issues.labels.length === 0);

        console.log(`\nIssues sin etiquetas: ${unlabeldIssues.length}\n`);

        unlabeldIssues.forEach((issues: any) => {
            console.log('Título:', issues.title);
            console.log('Autor:', issues.user.login)
            console.log('Fecha de creació:', new Date(issues.created_at).toLocaleString());
            console.log('---')
        })

    } catch (error) {
        console.error('Ocurrió un erro:', error);
    }
}

main();