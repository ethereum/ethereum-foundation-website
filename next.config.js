/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  webpack: (config, { webpack }) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            test: /\.svg$/,
            issuer: { not: /\.(css|scss|sass)$/ },
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  svgoConfig: {
                    plugins: [
                      {
                        name: 'preset-default',
                        params: {
                          overrides: {
                            removeViewBox: false,
                            cleanupIDs: false, // Critical to have this, otherwise svgs can start affecting each other
                          },
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
          {
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: ['raw-loader', 'glslify-loader'],
          },
          ...config.module.rules,
        ]
      }
    }
  }
}

module.exports = nextConfig
