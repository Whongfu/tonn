import type { PluginOption } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
    const { VITE_NAME } = env;
    
    const htmlPlugin: PluginOption[] = createHtmlPlugin({
        minify: isBuild,
        inject: {
            // / 在 `<head>` 中插入内容
            data: {
                title: VITE_NAME,
            },
            // 动态注入在 HTML 中的 js、css 标签等
            tags: [
                // 自定义 script 标签
                // {
                //     tag: 'script',
                //     attrs: {
                //         src: getAppConfigSrc(),
                //     },
                // },

                // 自定义 style 标签
                // {
                //     tag: 'style',
                //     children: 'body { margin: 0; padding: 0; }'
                // }
            ]
        },
    });
    return htmlPlugin;
}