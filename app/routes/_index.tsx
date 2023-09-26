import type { MetaFunction } from "@remix-run/node";
import { response } from '~/responses/main';
import { Desktop } from '~/components/Desktop';
import type { Tracklist } from "~/types";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix OS - My Portfolio" },
    { name: "description", content: "My web development portfolio" },
  ];
};

export let loader = async () => {
  const shuffledResponse: Tracklist = response.sort((a, b) => 0.5 - Math.random());
  return shuffledResponse;
}

export default function Index() {
  const data = useLoaderData<Tracklist>();
  return (
    <Desktop tracklist={data} />
  );
}
