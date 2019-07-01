import Head from 'next/head'

function Meta(props) {
    return <Head>
        <title>{props.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>;
}

export default Meta;