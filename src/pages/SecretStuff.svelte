<script lang="ts">
	import { navigate } from "svelte-routing";
	import { accessToken } from '../concerns/stores';
	import Button from "../ui_components/Button.svelte";

	const logout = () => {
		localStorage.removeItem("accessToken");
		accessToken.set(null);
		navigate('/', {replace: true})
	}
</script>

<h1>🤫 Its a Secret to Everybody 🤫 </h1>
<h2>💲💎💲</h2>
<Button on:message={logout} theme="cancel-button" label="leave" />
