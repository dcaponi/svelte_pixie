<script lang="ts">
    import { authURL } from '../concerns/stores';
    import Button from '../ui_components/Button.svelte';
    import { navigate } from 'svelte-routing';
</script>

<h2>This door is locked</h2>
<Button on:message={() => navigate($authURL)} label="🔐 unlock"/>
