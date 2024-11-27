/**
 * 全局变量
 */
//@ts-ignore
const env = import.meta.env

// 环境变量处理器
function wrapperEnv(envConf: Recordable): ViteEnv {
    console.log(11111, envConf)
    const env: any = {}
    // for (const envName of Object.keys(envConf)) {
    //     let envValue = env[envName]
    //     console.log(typeof envValue === 'string')
    // }

    return env
}

export default {
    wrapperEnv,
    ...wrapperEnv(env)
}