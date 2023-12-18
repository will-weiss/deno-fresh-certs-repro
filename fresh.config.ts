import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  plugins: [tailwind()],
  server: {
    cert: await Deno.readTextFile("./local-certs/localhost.crt"),
    key: await Deno.readTextFile("./local-certs/localhost.key"),
  },
});
