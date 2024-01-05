import { error } from '@sveltejs/kit';

export async function load({ params }) {
    if (params.id) { return { id: params.id }; }
}