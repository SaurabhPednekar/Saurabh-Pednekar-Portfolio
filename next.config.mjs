/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Fonts are loaded via <link> with preconnect + display=swap.
  // Disabling Next's build-time font inlining keeps builds deterministic
  // and free of any build-time network dependency.
  optimizeFonts: false,
};

export default nextConfig;
