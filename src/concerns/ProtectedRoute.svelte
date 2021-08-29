<script lang="ts">
  import Client from "@onelogin/sdk";

  import { Route } from 'svelte-routing';

  import { accessToken } from './stores';
  import Login from '../pages/Login.svelte';

  export let path: string;
  export let component: any;

  $: isAuthenticated = $accessToken;

  const onelogin = new Client( { region: "us" } );

  let pkceClient = onelogin.pkce.Configure({
    redirectURL: `http://localhost:8080${path}`,
    clientID: process.env.ONELOGIN_CLIENT_ID
  });

  pkceClient.CreateAuthURL(); // stores auth URL in localStorage automatically - you can also await and use the url elsewhere

  let urlParams = new URLSearchParams( window.location.search );
  if ( urlParams.has( 'code' ) && !isAuthenticated ) {
    let code =  urlParams.get( 'code' );
    pkceClient.GetAccessTokenAsync( code ).then( token => {
      if( token.access_token ) {
        localStorage.removeItem( "auth-url" ); 
        accessToken.set( token.access_token ); // set in svelte store
        localStorage.setItem( "accessToken", token.access_token ); // set in localStorage to survive hard refresh
      }
    } );
  }
</script>

{#if isAuthenticated}
    <Route path={path} component={component} />
{:else}
    <Route path={path} component={Login} />
{/if}