import { SanityClient, createClient } from "@sanity/client";

export const client: SanityClient = createClient({
    projectId: "7deeh2o9",
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: true
})