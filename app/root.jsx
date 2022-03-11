import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export function meta() {
  return { title: "New Remix App" };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Remix OS</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content="Remix OS - My Portfolio" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://remixos.dev/" />
        <meta property="og:image" content="https://remixos.dev/remix.png" />
        <meta property="og:site_name" content="Remix OS"/>
        <meta name="twitter:title" content="Remix OS - My portfolio"/>
        <meta name="twitter:description" content="My web development portfolio"/>
        <meta name="twitter:image" content="https://remixos.dev/remix.png"/>
        <meta name="twitter:image:alt" content="Remix framework logo"/>
        <meta name="twitter:card" content="summary_large_image"/>
        
        <Meta />
        <Links />
      </head>
      <body className="select-none cursor-default overflow-hidden bg-tile-3">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
