import {marked} from 'marked'; // Not included in bundle
import sanitizeHtml from 'sanitize-html'; // Not included in bundle
import {promises as fs} from 'fs';

/**
 * Server components can run at build time to read from the filesystem or fetch static content, so a web server is not required.
 * Async Components are a new feature of Server Components
 */
export default async function Home(props) {
    const readme = await fs.readFile('src/app/servercomponent/README.md');
    console.log(readme);
    return (
        <>
            <h2>React Server Component!</h2>
            <div dangerouslySetInnerHTML={{__html: sanitizeHtml(marked.parse(readme.toString()) as string)}} />
        </>
    );
}
