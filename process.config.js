module.exports = {
   apps: [
      {
         name: "Instagram",
         script: "./scripts/next.js",
         max_memory_restart: "256M",
         ignore_watch: ["node_modules"],
         watch_options: {
            followSymlinks: false,
         },
         env_production: {
            PORT: 8888,
            NODE_ENV: "production",
         },
      },
   ],
};
