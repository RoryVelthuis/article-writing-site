<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    let slug;
    let data;

    async function getArticle(slug) {
        const response = await fetch(`http://localhost:3000/articles/${slug}`);
        if (response.ok) {
            console.log(response)
            return await response.json();
        } else {
            console.error('Failed to fetch article:', response.statusText);
            return { title: 'Error', content: 'Failed to load article.' };
        }
    }

    $: slug = $page.params.slug;

    onMount(async () => {
        data = await getArticle(slug);
        console.log(data);
    });

</script>

{#if data }
<div>{data.title}</div>
<div>{data.content}</div>
{/if}
