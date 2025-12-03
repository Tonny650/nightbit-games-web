const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    turbopack: {},

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.tsx?$/,
            use: ["@svgr/webpack"],
        })
        return config
    }
}

export default nextConfig
