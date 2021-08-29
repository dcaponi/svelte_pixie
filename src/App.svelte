<!-- App.svelte -->
<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";

	import ProtectedRoute from './concerns/ProtectedRoute.svelte';
	import Home from "./pages/Home.svelte";
	import SecretStuff from "./pages/SecretStuff.svelte";

</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="secret">Secret Stuff</Link>
  </nav>
  	<Route path="/"><Home /></Route>
	<ProtectedRoute path="/secret" component="{SecretStuff}" />
	<Route path="/*" component={Home}/>
</Router>
