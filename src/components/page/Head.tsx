type HeadProps = {
  title: string
}

const Head = (props: HeadProps) => {
  return (
    <head>
      <title>{props.title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1,minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover' />
      <meta
        name="description"
        content="The Ethereum Foundation is a non-profit dedicated to enabling better human coordination. The Foundation nurtures the Ethereum protocol and community by supporting research, projects, and events."
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

      <link rel='shortcut icon' sizes='196x196' href='/eth-colorful-icon.svg' />
      <link rel='stylesheet' href='https://use.typekit.net/akf2vsf.css' />

      <meta property="og:site_name" content="The Ethereum Foundation" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content="The Ethereum Foundation is a non-profit dedicated to enabling better human coordination. The Foundation nurtures the Ethereum protocol and community by supporting research, projects, and events." />
      <meta property="og:url" content="https://ethereum.foundation" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://ethereum.foundation/assets/EF-website-thumbnail.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:image" content="https://ethereum.foundation/assets/EF-website-thumbnail.jpg" />
      <link rel='apple-touch-icon-precomposed' href='/assets/eth-colorful-icon.svg' />
      <link rel='apple-touch-icon' href='/assets/eth-colorful-icon.svg' />
      <meta name='msapplication-TileColor' content='#FFFFFF' />
      <meta name='msapplication-TileImage' content='/assets/eth-colorful-icon.svg' />
      <link rel='shortcut icon' sizes='196x196' href='/assets/eth-colorful-icon.svg' />
    </head>
  )
}

export default Head;